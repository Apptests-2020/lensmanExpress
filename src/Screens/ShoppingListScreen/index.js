import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';

import {BaseUrl, base64Auth} from '../../utils/constants';
import {setCartItem} from '../../store/actions';
import axios from 'axios';

import {
  CustomHeaderPrim,
  logoSmall,
  TabNavButton,
  filterIcon,
  ItemList,
  Loader,
} from '../../SharedComponents';

import {CommonStyles} from '../../SharedComponents';
import graphqlFetchHandler from '../../utils/graphqlFetchHandler';
import {CategoryList, CustomSelectList, FilterItem} from './components';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';

class ShoppingListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilter: false,
      productList: [],
      categoriesList: [],
      isLoading: false,
      image: '',
      whichCategory: '',
      isSearchData: false,
    };
  }

  componentDidMount() {
    this.getCategoryList();
    this.getProductList('All');
  }

  getCategoryProductlList = (data) => {
    const Product = [
      {item: 'Cameras', id: '224918962341'},
      {item: 'Electronics', id: '224923615397'},
      {item: 'Audio', id: '220604661925'},
      {item: 'Editing', id: '224924500133'},
      {item: 'Camera Equipment', id: '224927219877'},
      {item: 'Camera Accessories', id: '218930675877'},
      {item: 'Express Deals', id: '216724308133'},
    ];
    const id = Product.filter((item) => {
      return item.item === data.title;
    });
    this.setState({isLoading: true}, async () => {
      if (id.length && id !== null && id !== '') {
        await axios
          .get(
            BaseUrl +
              `/admin/api/2020-07/products.json?collection_id=${id[0].id}`,
            {
              headers: {
                Authorization: base64Auth,
              },
            },
          )
          .then((res) => {
            if (res.data.products && res.data.products.length) {
              this.setState({productList: res.data.products, isLoading: false});
            }
          })
          .catch((err) => {
            this.setState({isLoading: false});
            console.log('Err in get Product list in Dashboard', err);
          });
      }
    });
  };

  getProductList = (area) => {
    this.setState({isLoading: true}, async () => {
      if (area == 'Print') {
        axios
          .get(
            BaseUrl +
              '/admin/api/2020-07/products.json?collection_id=224954450085',
            {
              headers: {
                Authorization: base64Auth,
              },
            },
          )
          .then((res) => {
            console.warn('Print', res);

            if (res.data.product && res.data.products.length) {
              this.setState({
                productList: [res.data.product],
                isLoading: false,
              });
            } else {
              this.setState({isLoading: false, productList: []});
            }
          })
          .catch((err) => {
            this.setState({isLoading: false});
          });
      } else if (area == 'Buy') {
        await axios
          .get(
            BaseUrl +
              '/admin/api/2020-07/products.json?collection_id=224956088485',
            {
              headers: {
                Authorization: base64Auth,
              },
            },
          )
          .then((res) => {
            console.warn('Buy', res);
            if (res.data.products && res.data.products.length) {
              this.setState({productList: res.data.products, isLoading: false});
            } else {
              this.setState({isLoading: false, productList: []});
            }
          })
          .catch((err) => {
            this.setState({isLoading: false});
          });
      } else if (area == 'Rent') {
        await axios
          .get(
            BaseUrl +
              '/admin/api/2020-07/products.json?collection_id=224574767269',
            {
              headers: {
                Authorization: base64Auth,
              },
            },
          )
          .then((res) => {
            console.warn('Rent', res);
            if (res.data.products && res.data.products.length) {
              this.setState(
                {productList: res.data.products, isLoading: false},
                //   () => {
                //     console.log(
                //       'Res get Product list in Dashboard ',
                //       this.state.productList,
                //     );
                //   },
              );
            } else {
              this.setState({isLoading: false, productList: []});
            }
          })
          .catch((err) => {
            this.setState({isLoading: false});
          });
      } else {
        await axios
          .get(
            BaseUrl +
              '/admin/api/2020-07/products.json?collection_id=235418124483',
            {
              headers: {
                Authorization: base64Auth,
              },
            },
          )
          .then((res) => {
            console.warn('All', res);
            if (res.data.products && res.data.products.length) {
              this.setState(
                {
                  productList: res.data.products,
                  isLoading: false,
                  whichCategory: 'All',
                },
                //   () => {
                //     console.log(
                //       'Res get Product list in Dashboard ',
                //       this.state.productList,
                //     );
                //   },
              );
            } else {
              this.setState({isLoading: false, productList: []});
            }
          })
          .catch((err) => {
            this.setState({isLoading: false});
          });
      }
    });
  };

  handleFilter = () => {
    this.setState({isFilter: !this.state.isFilter});
  };

  handleCategory = (data) => {
    console.log('handleCategory ', data);
  };

  filterData = (data) => {
    // console.warn(data.id);

    if (data) {
      let id = data.id;
      this.props.navigation.navigate('ItemDetailsScreen', {productId: id});
    }
  };

  getCategoryList = async () => {
    const categories = [
      'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIyNDkxODk2MjM0MQ==',
      'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIyNDkyMzYxNTM5Nw==',
      'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIyMDYwNDY2MTkyNQ==',
      'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIyNDkyNDUwMDEzMw==',
      'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIyNDkyNzIxOTg3Nw==',
      'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIxODkzMDY3NTg3Nw==',
      'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIxNjcyNDMwODEzMw==',
    ];
    for (let index = 0; index < categories.length; index++) {
      const query = `
    {
      node(id:"${categories[index]}") {
        ...on Collection {
            title
          image{
            originalSrc
          }
            }
        }
    }
`;
      graphqlFetchHandler(
        {query},
        (onSuccess) => {
          this.setState({image: onSuccess.data.node.image.originalSrc});
          console.warn(onSuccess);
          this.setState({
            categoriesList: [...this.state.categoriesList, onSuccess.data.node],
          });
        },
        (error) => {
          this.setState({isCustomToaster: 'Something wrong', isLoader: false});
          console.log(error);
        },
      );
    }
  };
  render() {
    const {TTComDB28, tabNavContainer} = CommonStyles;

    const {
      isFilter,
      categoriesList,
      productList,
      isLoading,
      whichCategory,
      isSearchData,
    } = this.state;

    const {cartList} = this.props;
    // console.warn('categlist', categoriesList);

    return (
      <>
        <CustomStatusBar />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={{flex: 9, paddingHorizontal: 20}}>
            {isLoading ? (
              <Loader />
            ) : (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, marginTop: 170}}>
                  <Text style={TTComDB28}>Shop by Category</Text>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={
                      categoriesList && categoriesList.length > 0
                        ? categoriesList
                        : []
                    }
                    renderItem={(item, index) => {
                      // console.warn('1122', item.item);
                      return (
                        <CategoryList
                          label={
                            item.item.title && item.item.title.length > 15
                              ? item.item.title.slice(0, 15) + '...'
                              : item.item.title
                          }
                          image={
                            item.item &&
                            item.item.image !== null &&
                            item.item.image !== undefined &&
                            item.item.image.originalSrc !== null &&
                            item.item.image.originalSrc !== ''
                              ? {uri: item.item.image.originalSrc}
                              : require('../../../assests/Common/imagePlaceholder/placeholder.jpg')
                          }
                          selectCategory={() =>
                            this.getCategoryProductlList(item.item)
                          }
                        />
                      );
                    }}
                    style={{flexDirection: 'row'}}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={TTComDB28}>Products for you</Text>
                  {/* <TouchableOpacity onPress={() => this.handleFilter()}>
                    <Image source={filterIcon} />
                  </TouchableOpacity> */}
                </View>

                <View style={{flexDirection: 'row', marginVertical: 10}}>
                  <CustomSelectList
                    label="All"
                    isActive={whichCategory == 'All' ? true : false}
                    onPress={() => {
                      this.setState({whichCategory: 'All'});
                      this.getProductList('All');
                    }}
                  />
                  <CustomSelectList
                    label="Buy"
                    isActive={whichCategory == 'Buy' ? true : false}
                    onPress={() => {
                      this.setState({whichCategory: 'Buy'});
                      this.getProductList('Buy');
                    }}
                  />
                  <CustomSelectList
                    label="Rent"
                    isActive={whichCategory == 'Rent' ? true : false}
                    onPress={() => {
                      this.setState({whichCategory: 'Rent'});
                      this.getProductList('Rent');
                    }}
                  />
                  <CustomSelectList
                    label="Print"
                    isActive={whichCategory == 'Print' ? true : false}
                    onPress={() => {
                      this.setState({whichCategory: 'Print'});
                      this.getProductList('Print');
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    marginBottom: 90,
                  }}>
                  {productList && productList.length ? (
                    productList.map((item, index) => {
                      return (
                        <ItemList
                          discount={
                            item.variants &&
                            item.variants[0] &&
                            item.variants[0].price &&
                            item.variants[0].compare_at_price
                              ? '-' +
                                Math.floor(
                                  100 -
                                    (item.variants[0].price /
                                      item.variants[0].compare_at_price) *
                                      100,
                                )
                              : '0'
                          }
                          key={index}
                          onAction={() =>
                            this.props.navigation.navigate(
                              'ItemDetailsScreen',
                              {
                                productId: item.id,
                              },
                            )
                          }
                          image={
                            item.image &&
                            item.image.src !== '' &&
                            item.image.src !== null && {uri: item.image.src}
                          }
                          itemName={item.title}
                          price={
                            item.variants &&
                            item.variants[0] &&
                            item.variants[0].price
                          }
                        />
                      );
                    })
                  ) : (
                    <View
                      style={{
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                      }}>
                      <Text style={{fontFamily: 'TTCommons-Medium'}}>
                        No Products Available
                      </Text>
                    </View>
                  )}
                </View>
              </ScrollView>
            )}
          </View>
          {!isSearchData && (
            <SafeAreaView>
              <View style={[tabNavContainer, {width: '90%'}]}>
                <TabNavButton
                  nav={this.props}
                  active="2"
                  cartNotification={cartList}
                />
              </View>
            </SafeAreaView>
          )}

          {isFilter && (
            <Modal animationType="slide" transparent={false} visible={isFilter}>
              <View style={{flex: 1}}>
                <CustomHeaderPrim
                  placeholder="What are you looking for?"
                  searchBox
                  handleSearchBox={() => console.log('search box')}
                  searchBoxClearButton
                  searchBoxClear={() => console.log('search box clear')}
                />

                <View style={{flex: 9}}>
                  <FilterItem
                    name="Sony Aplha X 1 32.mm"
                    onAction={() => this.handleFilter()}
                  />
                  <FilterItem
                    name="Sony Aplha X 1 32.mm"
                    onAction={() => this.handleFilter()}
                  />
                  <FilterItem
                    name="Sony Aplha X 1 32.mm"
                    onAction={() => this.handleFilter()}
                  />
                  <FilterItem
                    name="Sony Aplha X 1 32.mm"
                    onAction={() => this.handleFilter()}
                  />
                  <FilterItem
                    name="Sony Aplha X 1 32.mm"
                    onAction={() => this.handleFilter()}
                  />
                  <FilterItem
                    name="Sony Aplha X 1 32.mm"
                    onAction={() => this.handleFilter()}
                  />
                </View>
              </View>
            </Modal>
          )}
          <View
            style={[
              {
                zIndex: 1,
                position: 'absolute',
                backgroundColor: 'transparent',
                width: '100%',
              },
              isSearchData && {height: '100%'},
            ]}>
            <CustomHeaderPrim
              leftIcon={logoSmall}
              leftIconAction={() =>
                this.props.navigation.navigate('DashboardScreen')
              }
              placeholder="What are you looking for?"
              searchBox
              handleSearchBox={() => console.log('search box')}
              data={productList}
              filterData={this.filterData}
              onSearchEvent={(isShow) => {
                this.setState({isSearchData: isShow});
              }}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

// export default ShoppingListScreen;

const mapStateToProps = (state) => {
  console.log('PROP in REDUX', state.Layout.cartList);
  return {
    cartList: state.Layout.cartList,
  };
};
const mapDispatchToProps = {
  setCartItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListScreen);
