import React from 'react';
import {Form, Select, Input, DatePicker, Upload, message, Button, Icon} from 'antd';
import './styles.less'
import axios from "axios"
import qs from "qs"
import { addset } from "@/api/actions"

const { Option } = Select;
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
export default
@Form.create({ name: 'validate_other' })
class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let a={
                    file:this.state.imageUrl,
                    type:"post"
                }
                axios.post("/api/Home/Apis/upload",qs.stringify(a)).then(res=>{
                    let url="http:"+res.data.result
                    values.dragger=url
                    const obj = {
                        updatetime: values.dragger,
                        address: values.address,
                        homeone: "巴基斯坦特种兵",
                        homesize: values.homesize,
                        Door: values.Door,
                        building: "30",
                        leases: "30",
                        status: "30",
                        dataTime: "2020.01.08~2020.01.08",
                        url: "www.baidu.com",
                        firstTime:"2019-12-01",
                        lastTime:"2019-12-28",
                        styleimg: values.styleimg,
                        language:values.language,
                        child:values.child,
                        usd:values.usd,
                        like:0
                    }
    
                    let a={
                        token:localStorage.getItem("quan"),
                        info:obj
                    }
                    addset(a).then(res => {
                        console.log(res)
                    })
                   
                })
                
            }

        });
    }

    normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

    uploadone = (v) => {
        console.log(v)
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const config = {
            rules: [
                { 
                    type: 'object', 
                    required: true, 
                    message: '请输入开始时间!'
                }
            ],
        };
        const configs = {
            rules: [
                { 
                    type: 'object', 
                    required: true, 
                    message: '请输入结束时间!'
                }
            ],
        };
        const props = {
            name: 'file',
            onChange(info) {
                console.log(info.file)
            },
        };
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <div className="adult" >
                <div className="box">
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                        {/* 标题 */}
                        <Form.Item label="标题">
                            {getFieldDecorator('Door', {
                                rules: [
                                    { 
                                        required: true, 
                                        message: '请输入标题!' 
                                    }
                                ],
                            })(
                                <Input placeholder="标题" />,
                            )}
                        </Form.Item>

                        {/* 描述 */}
                        <Form.Item label="描述">
                            {getFieldDecorator('homesize', {
                                rules: [
                                    { 
                                        required: true, 
                                        message: '请输入描述!' 
                                    }
                                ],
                            })(
                                <Input placeholder="描述" />,
                            )}
                        </Form.Item>

                        {/* 注释 */}
                        <Form.Item label="注释">
                            {getFieldDecorator('address', {
                                rules: [
                                    { 
                                        required: true, 
                                        message: '请输入注释!' 
                                    }
                                ],
                            })(
                                <Input placeholder="注释" />,
                            )}
                        </Form.Item>

                        {/* 图片类型 */}
                        <Form.Item label="图片类型">
                            {getFieldDecorator('styleimg', {
                                rules: [
                                    { 
                                        required: true, 
                                        message: '请选择图片类型!' 
                                    }
                                ],
                            })(
                                <Select placeholder="图片类型">
                                    <Option value="image">image</Option>
                                    <Option value="video">video</Option>
                                </Select>,
                            )}
                        </Form.Item>

                        {/* 开始时间 */}
                        <Form.Item label="开始时间">
                            {getFieldDecorator('firstTime', config)(<DatePicker />)}
                        </Form.Item>

                        {/* 结束时间 */}
                        <Form.Item label="结束时间">
                            {getFieldDecorator('lastTime', configs)(<DatePicker />)}
                        </Form.Item>

                        {/* COD */}
                        <Form.Item label="语言">
                            {getFieldDecorator('language', {
                                rules: [
                                    { 
                                        required: true, 
                                        message: '请选择语言!' 
                                    },
                                ],
                            })(
                                <Select placeholder="语言">
                                    <Option value="Chinese">Chinese</Option>
                                    <Option value="English">English</Option>
                                </Select>,
                            )}
                        </Form.Item>

                        {/* 域名 */}
                        <Form.Item label="地理位置">
                            {getFieldDecorator('child', {
                                rules: [
                                    { 
                                        required: true, 
                                        message: '请选择地理位置!' 
                                    },
                                ],
                            })(
                                <Select placeholder="地理位置">
                                    <Option value="Chind">Chind</Option>
                                    <Option value="USA">USA</Option>
                                    <Option value="巴基斯坦">巴基斯坦</Option>
                                </Select>,
                            )}
                        </Form.Item>

                        {/* 收藏 */}
                        <Form.Item label="广告类型">
                            {getFieldDecorator('usd', {
                                rules: [
                                    { 
                                        required: true, 
                                        message: '请选择广告类型!' 
                                    },
                                ],
                            })(
                                <Select placeholder="广告类型">
                                    <Option value="cloaked">cloaked</Option>
                                    <Option value="suspectud">suspectud</Option>
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="图片上传">
                            {getFieldDecorator('updatetime', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                            })(
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="/api/Home/Apis/upload"
                                    beforeUpload={beforeUpload}
                                    onChange={this.handleChange}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                </Upload>
                            )}
                        </Form.Item>
                        {/* 按钮 */}
                        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                            <Button type="primary" htmlType="submit">
                                添加
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div >
        )
    }
}