import React from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import ImageUploader from 'react-images-upload';

const AdForm = ({ todo, onSubmit }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: { text: todo ? todo.text : "" },
    });

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    });

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="text">Text:</label>
                <input
                    className="form-control"
                    ref={register}
                    type="text"
                    name="text"
                    id="text"
                />
            </div>
            <div className="outlineBox">
                <p className="boxHead">General Information</p>
                <div className="row boxBody">
                    <div className="col-sm-6">
                        <label htmlFor="" className="mt-0">
                            Enter your Name and Surname: <span className="red">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name and Surname"
                            className="form-control"
                            name="name"
                        />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="" className="mt-0">
                            Price: <span className="red">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Hourly Amount [€]"
                            className="form-control"
                            name="price"
                        />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="">
                            Caregive Type: <span className="red">*</span>
                        </label>
                        <select name="badenti_type" id="" className="form-control">
                            <option value="First Experince Caregiver">
                                First Experince Caregiver
                             </option>
                            <option value="Experince Caregiver ( > 5 years of experience)">
                                Experince Caregiver ( > 5 years of experience)
                            </option>
                            <option value="Professional Caregiver ( > 15 years of experience)">
                                Professional Caregiver ( > 15 years of experience)
                            </option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="">
                            Country: <span className="red">*</span>
                        </label>
                        <select name="country" id="" className="form-control">
                            <option value="Italy">Italy</option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="">
                            Age Range: <span className="red">*</span>
                        </label>
                        <select name="age_range" id="" className="form-control">
                            <option value="18-29 years">18-29 years</option>
                            <option value="30-39 years">30-39 years</option>
                            <option value="40-49 years">40-49 years</option>
                            <option value="50-69 years">50-69 years</option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="">
                            Gender: <span className="red">*</span>
                        </label>
                        <select name="gender" id="" className="form-control">
                            <option value="Women">Women</option>
                            <option value="Men">Men</option>
                        </select>
                    </div>
                    <div className="col-sm-12">
                        <label htmlFor="">
                            Service Description: <span className="red">*</span>
                        </label>
                        <textarea name="service_desc" id="" className="form-control" placeholder="Service Description"></textarea>
                    </div>
                    <div className="col-sm-12">
                        <label htmlFor="">
                            Upload Image: <span className="red">*</span>
                        </label>
                        {/* <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            withPreview='true'
                            name="img"
                        /> */}
                    </div>
                </div>
            </div>
            <div className="outlineBox">
                <p className="boxHead">Contact Info</p>
                <div className="row boxBody">
                    <div className="col-sm-6">
                        <label htmlFor="" className="mt-0">
                            Enter your Name and Surname: <span className="red">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name and Surname"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="" className="mt-0">
                            Price: <span className="red">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Hourly Amount [€]"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="">
                            Caregive Type: <span className="red">*</span>
                        </label>
                        <select name="" id="" className="form-control">
                            <option value="First Experince Caregiver">
                                First Experince Caregiver
                            </option>
                            <option value="Experince Caregiver ( > 5 years of experience)">
                                Experince Caregiver ( > 5 years of experience)
                            </option>
                            <option value="Professional Caregiver ( > 15 years of experience)">
                                Professional Caregiver ( > 15 years of experience)
                            </option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="">
                            Country: <span className="red">*</span>
                        </label>
                        <select name="" id="" className="form-control">
                            <option value="Italy">Italy</option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="">
                            Age Range: <span className="red">*</span>
                        </label>
                        <select name="" id="" className="form-control">
                            <option value="18-29 years">18-29 years</option>
                            <option value="30-39 years">30-39 years</option>
                            <option value="40-49 years">40-49 years</option>
                            <option value="50-69 years">50-69 years</option>
                        </select>
                    </div>
                    <div className="col-sm-6">

                        <label htmlFor="">
                            Gender: <span className="red">*</span>
                        </label>
                        <select name="" id="" className="form-control">
                            <option value="Women">Women</option>
                            <option value="Men">Men</option>
                        </select>
                    </div>
                </div>
            </div>

            <Button type="submit" variant="contained" color="primary">
                Post Ad
            </Button>

        </form>
    );
};

export default AdForm; 