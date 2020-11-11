import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
  Modal,
  ToastAndroid,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import axios from 'axios';
import {
  CustomHeaderPrim,
  CustomButton,
  CustomInput,
  Loader,
  CustomToaster,
} from '../../SharedComponents';

import {
  LeftArrowIcon,
  radioButtonEmptyIcon,
  radioButtonFillYellowIcon,
} from '../../SharedComponents/CommonIcons';

import {CommonStyles} from '../../SharedComponents/CustomStyles';
import AsyncStorage from '@react-native-community/async-storage';

import {setLoginData} from '../../store/actions';

import {connect} from 'react-redux';

import {BaseUrlSchool} from '../../utils/constants';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';
const {height} = Dimensions.get('screen');
class SchoolSubmitPhotoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSchoolList: false,
      CustomMarginTop: 0,
      schoolList: [],
      form: {
        name: '',
        address: '',
        state: '',
        city: '',
        school: '',
        class: '',
        division: '',
        email: '',
        phone: '',
        gender: 'male',
      },
      isLoading: false,
      SchoolImage: '',
      validationError: {
        name: false,
        email: false,
        class: false,
        division: false,
        phone: false,
        address: false,
        city: false,
      },
      selectedSchoolDetails: '',
      loginData: '',
      isCustomToaster: '',
    };
  }

  async componentDidMount() {
    this.getSchoolList();
    try {
      let data = await AsyncStorage.getItem('loginDetails');
      console.log('Data 100', data);
      if (data !== null) {
        this.setState({loginData: JSON.parse(data)});
        this.props.setLoginData(data);
      }
      // this.setState({SchoolImage: JSON.parse(data)}, () =>
      //   console.log('pling', this.state.SchoolImage),
      // );
    } catch (error) {
      console.log('School Photo  Form Submit not success,', error);
    }
  }

  getSchoolList = () => {
    this.setState({isLoading: true}, () => {
      axios
        .get(BaseUrlSchool + '/api/schools')
        .then((res) => {
          console.warn('Res School List', res.data.result.rows);
          res.data.result.rows.map((items) => (items.isSelected = false));
          this.setState({isLoading: false, schoolList: res.data.result.rows});
        })
        .catch((err) => {
          this.setState({
            isLoading: false,
            isCustomToaster: 'Something went wrong, No more School List',
          });
          console.log('Errr in get School List', err);
        });
    });
  };

  addStudent = (payload) => {
    this.setState({isLoading: true}, () => {
      axios
        .post(BaseUrlSchool + '/api/student', payload)
        .then((res) => {
          console.log('Res add Student 1 ', res.data.result.id);

          let form = {...this.state.form};
          form.schoolId = res.data.result.id;
          this.props.navigation.navigate('SchoolIntructionScreen', {
            formData: form,
          });
          this.setState(
            {
              isLoading: false,
              isCustomToaster: 'Successfully Added',
            },
            async () => {
              const data = {
                data: form,
                screen: 'SchoolIntructionScreen',
              };
              await AsyncStorage.setItem(
                'AlreadyTakePhoto',
                JSON.stringify(data),
              );
            },
          );
        })
        .catch((err) => {
          this.setState({isLoading: false});
          if (err.response.data.error.message) {
            this.setState({
              isLoading: false,
              isCustomToaster: err.response.data.error.message,
            });
          } else {
            this.setState({
              isLoading: false,
              isCustomToaster: 'Something Went Wrong',
            });
          }
          console.log('Errr in add Student', err.response.data);
          console.log('22223333', this.state.form);
          console.log('666666666', this.state.selectedSchoolDetails);
        });
    });
  };

  handleSchoolList = () => {
    if (this.state.schoolList.length) {
      this.setState({isSchoolList: !this.state.isSchoolList});
    } else {
      this.setState({
        isLoading: false,
        isCustomToaster: 'please create school list or Contact Admin',
      });
    }
  };

  handleSelectSchool = (index) => {
    let schoolList = [...this.state.schoolList];
    let form = {...this.state.form};

    schoolList[index].isSelected = true;

    schoolList.map((data, listIndex) => {
      if (listIndex !== index) {
        data.isSelected = false;
      }
    });
    form.school = schoolList[index].name;
    this.setState(
      {
        isSchoolList: false,
        schoolList,
        form,
        selectedSchoolDetails: schoolList[index],
      },
      () =>
        console.log('selectedSchoolDetails', this.state.selectedSchoolDetails),
    );
  };

  handleForm = (data, type) => {
    let form = {...this.state.form};
    if (type === 'name') {
      form.name = data;
    } else if (type === 'class') {
      form.class = data;
    } else if (type === 'division') {
      form.division = data;
    } else if (type === 'email') {
      form.email = data;
    } else if (type === 'phone') {
      form.phone = data;
    } else if (type === 'city') {
      form.city = data;
    } else if (type === 'address') {
      form.address = data;
    }
    this.setState({form});
  };

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  getUniqueId = (cb) => {
    axios
      .get(BaseUrlSchool + '/api/student')
      .then((res) => {
        console.log('Res Latest Uniq ID ', res.data);
        if (cb) cb(res.data.result);
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          isCustomToaster: 'Something Went Wrong',
        });
        console.log('Errr in Get unique Id ', err.response.data);
      });
  };

  handleSubmit = () => {
    const {form, validationError} = this.state;
    const {name, email, division, phone, address, city} = form;

    if (name === '') {
      validationError.name = true;
    } else {
      validationError.name = false;
    }

    if (form.class === '') {
      validationError.class = true;
    } else {
      validationError.class = false;
    }

    if (division === '') {
      validationError.division = true;
    } else {
      validationError.division = false;
    }

    if (email === '' || !this.validateEmail(email)) {
      validationError.email = true;
    } else {
      validationError.email = false;
    }

    if (phone === '') {
      validationError.phone = true;
    } else {
      validationError.phone = false;
    }

    if (city === '') {
      validationError.city = true;
    } else {
      validationError.city = false;
    }
    if (address === '') {
      validationError.address = true;
    } else {
      validationError.address = false;
    }

    this.setState({validationError}, () => {
      console.log('1001', validationError);
      if (
        validationError.name &&
        validationError.class &&
        validationError.division &&
        validationError.email &&
        validationError.phone &&
        validationError.address &&
        validationError.city
      ) {
        // if (this.validateEmail(email)) {
        console.log('5000', validationError);
        this.setState({
          isCustomToaster: 'Please fill all the fields',
        });
        // } else {
        // }
      } else {
        let payload = {
          name: form.name,
          email: form.email,
          refferId: this.state.loginData.id,
          grade: form.class,
          section: form.division,
          phone: form.phone,
          gender: form.gender,
          schoolId: this.state.selectedSchoolDetails.id,
          city: form.city,
          address: form.address,
        };

        if (
          !validationError.name &&
          !validationError.class &&
          !validationError.division &&
          !validationError.phone &&
          !validationError.address &&
          !validationError.city
        ) {
          console.log('PAYload', payload);
          this.addStudent(payload);
        }
      }
    });
  };

  showToaster = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50,
    );
  };

  handleRadioButton = (type) => {
    let form = {...this.state.form};
    if (type === 'male') {
      form.gender = 'male';
    } else if (type === 'female') {
      form.gender = 'female';
    }
    this.setState({form});
  };

  render() {
    const {TTComM16, TTComL16} = CommonStyles;

    const {
      isSchoolList,
      schoolList,
      form,
      isLoading,
      validationError,
      isCustomToaster,
    } = this.state;
    return (
      <>
        <CustomStatusBar />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          {/* <StatusBar backgroundColor="#fff" barStyle="dark-content" /> */}

          {isLoading ? (
            <Loader />
          ) : (
            <View style={{flex: 9, paddingHorizontal: 20, marginTop: 80}}>
              <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingTop: 100,
                  paddingBottom: Platform.OS == 'ios' ? 100 : 0,
                }}>
                <CustomWrapper>
                  <CustomInput
                    placeholder="Student’s Name"
                    label="Student’s Name"
                    onchange={(data) => this.handleForm(data, 'name')}
                    isValidationErr={validationError.name}
                  />
                </CustomWrapper>
                <CustomInputRadio
                  label="Student’s Gender"
                  onAction={this.handleRadioButton}
                  value={form.gender}
                />
                <CustomWrapper>
                  <CustomInput
                    placeholder="Address"
                    label="Address"
                    onchange={(data) => this.handleForm(data, 'address')}
                    isValidationErr={validationError.name}
                  />
                </CustomWrapper>
                <CustomWrapper>
                  <CustomWrapper>
                    <CustomInput
                      placeholder="State"
                      label="State"
                      onchange={(data) => this.handleForm(data, 'city')}
                      isValidationErr={validationError.name}
                    />
                  </CustomWrapper>
                  <CustomWrapper>
                    <CustomInput
                      placeholder="Country"
                      label="Country"
                      onchange={(data) => this.handleForm(data, 'Country')}
                      isValidationErr={validationError.name}
                    />
                  </CustomWrapper>
                  <CustomInputDropdown
                    label="School"
                    onAction={() => this.handleSchoolList()}
                    value={form.school}
                    isValidationErr={validationError.name}
                  />

                  {isSchoolList && (
                    <View
                      style={{
                        maxHeight: 200,
                        borderColor: '#E9E9E9',
                        borderWidth: 1.5,
                        borderRadius: 12,
                      }}>
                      <ScrollView nestedScrollEnabled={true}>
                        {schoolList &&
                          schoolList.length &&
                          schoolList.map((list, index) => {
                            return (
                              <TouchableOpacity
                                key={index}
                                onPress={() => this.handleSelectSchool(index)}
                                style={{
                                  paddingVertical: 15,
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <View
                                  style={
                                    list.isSelected
                                      ? {
                                          paddingVertical: 15,
                                          width: 5,
                                          backgroundColor: '#FFC000',
                                        }
                                      : {}
                                  }
                                />
                                <Text
                                  style={[
                                    list.isSelected ? TTComM16 : TTComL16,
                                    {paddingLeft: 15},
                                  ]}>
                                  {list.name}
                                </Text>
                              </TouchableOpacity>
                            );
                          })}
                      </ScrollView>
                    </View>
                  )}
                </CustomWrapper>
                <CustomWrapper>
                  <CustomInput
                    placeholder="Class"
                    label="Grade"
                    onchange={(data) => this.handleForm(data, 'class')}
                    isValidationErr={validationError.class}
                  />
                </CustomWrapper>
                <CustomWrapper>
                  <CustomInput
                    placeholder="Divison"
                    label="Section"
                    onchange={(data) => this.handleForm(data, 'division')}
                    isValidationErr={validationError.division}
                  />
                </CustomWrapper>
                <CustomWrapper>
                  <CustomInput
                    placeholder="Email"
                    label="Email"
                    keyboardType="email-address"
                    onchange={(data) => this.handleForm(data, 'email')}
                    isValidationErr={validationError.email}
                  />
                </CustomWrapper>
                <CustomWrapper>
                  <CustomInput
                    placeholder="Phone Number"
                    label="Phone Number"
                    type="phone"
                    keyboardType="phone-pad"
                    onchange={(data) => this.handleForm(data, 'phone')}
                    isValidationErr={validationError.phone}
                  />
                </CustomWrapper>

                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    marginBottom: 150,
                  }}>
                  <CustomButton
                    buttonStyles="btn-secondary-black"
                    textStyles="txt-secondary"
                    text="Next"
                    onAction={() => this.handleSubmit()}
                    width="100%"
                  />
                </View>
              </ScrollView>
            </View>
          )}
          {
            // isSchoolList &&
            // <Modal
            //     animationType   = "slide"
            //     transparent     = {true}
            //     visible         = {isSchoolList} >
            //         <View style={{flex : 1, justifyContent : 'center', alignItems : 'center', backgroundColor : '#00000038'}}>
            //             <View style={{backgroundColor : '#fff', borderRadius : 10, maxHeight : Dimensions.get('screen').height*0.8, width : '80%', paddingVertical : 15 }}>
            //                 {
            //                     schoolList&&schoolList.length&&schoolList.map((item, index)=>{
            //                         return(
            //                             <View
            //                                 key = {index}
            //                                 style={{
            //                                     width : '70%',
            //                                     paddingVertical : 10,
            //                                     flexDirection : 'row',
            //                                 }}>
            //                                     {
            //                                         item.isSelected&&item.isSelected?
            //                                             <View style={{width : 5, height : '100%', backgroundColor : '#FFC000', marginRight : 5}} key={index} />
            //                                             : <View style={{width : 5, height : '100%', marginRight : 5}} key={index} />
            //                                     }
            //                                     <TouchableOpacity
            //                                         onPress = {()=>this.handleSelectSchool(index)}
            //                                         style = {{paddingVertical : 5,paddingHorizontal : 10}}>
            //                                         <Text style={TTComM16}>{item.name}</Text>
            //                                     </TouchableOpacity>
            //                                 </View>
            //                             )
            //                         })
            //                 }
            //             </View>
            //         </View>
            // </Modal>
          }
          {isCustomToaster !== '' && (
            <CustomToaster
              position="flex-end"
              onend={() => this.setState({isCustomToaster: ''})}
              isCustomToaster={true}
              message={isCustomToaster}
            />
          )}
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              position: 'absolute',
            }}>
            <CustomHeaderPrim
              leftIcon={LeftArrowIcon}
              leftIconAction={() => this.props.navigation.goBack()}
              centerLabel="Add photo"
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Redux Log Datas ', state.Login.data);
  return {
    loginData: state.Login.data,
  };
};
const mapDispatchToProps = {
  setLoginData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SchoolSubmitPhotoScreen);

const CustomWrapper = (props) => {
  return <View style={{marginVertical: 10}}>{props.children}</View>;
};

const CustomInputDropdown = (props) => {
  const {label, value, onAction} = props;
  return (
    <View>
      {label && <Text style={CommonStyles.customInputLabel}>{label}</Text>}
      <TouchableOpacity onPress={() => onAction()} style={{}}>
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            borderRadius: 12,
            backgroundColor: '#fff',
            fontFamily: 'TTCommons-Medium',
            borderWidth: 1.5,
            borderColor: '#E9E9E9',
            paddingLeft: 20,
            paddingTop: 15,
            paddingBottom: 15,
            // height: 50,
            // textAlignVertical: 'center',
          }}>
          {value === '' ? 'School' : value}
        </Text>
        <Image
          source={require('../../../assests/RegisterScreen/dropdownDownIcon/Polygon2.png')}
          style={{position: 'absolute', top: '40%', right: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

const CustomInputRadio = (props) => {
  const {label, onAction, value} = props;
  console.log('value', value);
  const {TTComDB18} = CommonStyles;
  return (
    <View style={{marginTop: 20}}>
      <Text style={TTComDB18}>{label && label}</Text>

      <View style={{flexDirection: 'row', marginTop: 15}}>
        <TouchableOpacity
          onPress={() => onAction('male')}
          style={{flexDirection: 'row'}}>
          <Image
            source={
              value === 'male'
                ? radioButtonFillYellowIcon
                : radioButtonEmptyIcon
            }
          />
          <Text style={{marginHorizontal: 10, fontFamily: 'TTCommons-Medium'}}>
            Male
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onAction('female')}
          style={{flexDirection: 'row', marginLeft: 15}}>
          <Image
            source={
              value === 'female'
                ? radioButtonFillYellowIcon
                : radioButtonEmptyIcon
            }
          />
          <Text style={{marginHorizontal: 10, fontFamily: 'TTCommons-Medium'}}>
            Female
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
