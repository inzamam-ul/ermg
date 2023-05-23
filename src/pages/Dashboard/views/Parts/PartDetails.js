import React, { useState, useEffect } from 'react';
import { Tooltip } from '@material-ui/core';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useForm } from 'react-hook-form';
import './partDetails.css';
import Button from '../../components/CustomButtons/Button';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { ColorPicker, createColor } from 'material-ui-color';
import Preloader from '../../../../Preloader/Preloader';
var Spinner = require('react-spinkit');

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },

  input: {
    display: 'none',
  },
}));

const PartDetails = () => {
  const [preloader, setPreloader] = useState(true);
  const [singleMaterialPart, setSingleMaterialPart] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch('https://calm-sea-09227.herokuapp.com/singleMaterialPart/' + id)
      .then(res => res.json())
      .then(data => {
        setSingleMaterialPart(data);
        setColor(createColor(data.materialColor));
        setPreloader(false);
      });
  }, [id]);

  const {
    _id,
    materialName,
    description,
    materialType,
    weight,
    size,
    materialColor,
    materialImg,
    composition,
    additionalInformation,
  } = singleMaterialPart;

  console.log(materialColor);
  const [color, setColor] = useState(createColor(''));
  const [colorData, setColorData] = useState('');
  const handleColorChange = value => {
    console.log('onChange=', value);
    setColor(value);
    setColorData('#' + value.hex);
  };

  console.log(singleMaterialPart);

  const classes = useStyles();

  const history = useHistory();

  const [selectedMaterialType, setSelectedMaterialType] = useState('');
  const handleMaterialType = event => {
    console.log(event.target.value);
    setSelectedMaterialType(event.target.value);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    if (image) {
      data.materialImg = image;
    } else {
      data.materialImg = materialImg;
    }
    if (colorData) {
      data.materialColor = colorData;
    } else {
      data.materialColor = materialColor;
    }

    if (!data.materialName) data.materialName = materialName;
    if (!data.description) data.description = description;
    if (!data.materialType) data.materialType = materialType;
    if (!data.weight) data.weight = weight;
    if (!data.size) data.size = size;
    if (!data.composition) data.composition = composition;
    if (!data.additionalInformation)
      data.additionalInformation = additionalInformation;
    data.id = _id;
    console.log(data);

    fetch('https://calm-sea-09227.herokuapp.com/updateMaterialParts', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          history.push('/admin/parts');
        } else {
          history.push('/admin/parts');
        }
      });
  };
  const [on, setOn] = useState(false);
  const [imageUpload, setImageUpload] = useState(false);
  const [image, setImage] = useState();
  let imgFile;
  const handleFile = event => {
    handleUpload(event.target.files[0]);
  };
  const handleDragOver = e => {
    e.preventDefault();
    setOn(true);
  };
  const handleDragLeave = e => {
    setOn(false);
    e.preventDefault();
  };
  const handleDrop = e => {
    e.preventDefault();
    setOn(false);

    imgFile = e.dataTransfer.files[0];
    handleUpload(imgFile);
  };

  const handleUpload = file => {
    setImageUpload(true);
    const imageData = new FormData();
    imageData.set('key', 'f16e0919dbce32c8326397f504a1e7b1');
    imageData.append('image', file);
    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
        setImageUpload(false);
      })
      .catch(function (error) {
        alert('failed to upload. try again');
      });
  };

  //handle Delete

  const handleDeleteMaterialPart = () => {
    fetch(`https://calm-sea-09227.herokuapp.com/deleteMaterialPart/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          history.push('/admin/parts');
        } else {
        }
      });
  };
  return (
    <>
      {preloader ? (
        <Preloader />
      ) : (
        <>
          <div
            style={{ backgroundColor: '#E7E6E7' }}
            className="d-flex align-items-center p-2 justify-content-between"
          >
            <Typography variant="h5">{materialName}</Typography>
            <Button
              onClick={() => history.push('/admin/parts')}
              component="span"
            >
              X
            </Button>
          </div>
          <div className="mx-2">
            <div
              style={{ backgroundColor: '#F9F8F9' }}
              className="row justify-content-center "
            >
              <div className="col-md-3 mt-5 text-center ">
                <img
                  style={{ height: '300px' }}
                  src={image ? image : materialImg}
                  alt="productImg"
                  className="img-fluid"
                />

                <Grid
                  onDragOver={e => handleDragOver(e)}
                  onDragLeave={e => handleDragLeave(e)}
                  onDrop={e => handleDrop(e)}
                  item
                  xs={12}
                  md={12}
                  style={{
                    backgroundColor: '#F6FAFB',
                    boxShadow:
                      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                    padding: '100px 20px',
                    marginTop: '20px',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  {imageUpload && (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px',
                      }}
                    >
                      <Spinner
                        style={{ marginTop: '30px', marginBottom: '10px' }}
                        name="line-spin-fade-loader"
                      />
                    </div>
                  )}

                  <div>
                    {!imageUpload ? (
                      <span>
                        {on ? (
                          <Typography
                            style={{
                              fontWeight: '600',
                              fontSize: '30px',
                            }}
                            variant="subtitle2"
                          >
                            Release To Upload File
                          </Typography>
                        ) : (
                          <>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center',
                              }}
                            >
                              <span>
                                <input
                                  onChange={handleFile}
                                  accept="image/*"
                                  className={classes.input}
                                  id="contained-button-file"
                                  multiple
                                  type="file"
                                />
                                <label htmlFor="contained-button-file">
                                  <Tooltip title="Add Photo" placement="top">
                                    <CloudUploadIcon
                                      style={{
                                        fontSize: '50px',
                                        marginBottom: '15px',
                                        cursor: 'pointer',
                                      }}
                                    />
                                  </Tooltip>
                                </label>
                              </span>

                              <Typography
                                style={{
                                  fontWeight: '600',
                                  marginBottom: '15px',
                                }}
                                variant="subtile1"
                              >
                                Upload New Photo
                              </Typography>
                              <Typography style={{}} variant="subtitle2">
                                click on Icon or drag and drop
                              </Typography>
                            </div>
                          </>
                        )}
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                </Grid>
              </div>
              <div className="col-md-8 mt-5 ">
                <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex mb-2 justify-content-between ">
                    <label className="pe-1 " htmlFor="">
                      Name of material
                    </label>
                    <input
                      style={{ width: '70%' }}
                      className="form-control"
                      name="materialName"
                      defaultValue={materialName}
                      {...register('materialName')}
                    />
                  </div>
                  <div className="d-flex mb-2 justify-content-between  ">
                    <label className="pe-1" htmlFor="">
                      Description
                    </label>
                    <textarea
                      style={{ width: '70%' }}
                      className="form-control"
                      name="description"
                      rows="2"
                      defaultValue={description}
                      {...register('description')}
                    ></textarea>
                  </div>
                  <div className="d-flex mb-2 justify-content-between  ">
                    <label className="pe-1" htmlFor="">
                      Material / Part Type
                    </label>
                    <div style={{ width: '70%' }} className="row m-0">
                      <div
                        onChange={handleMaterialType}
                        className=" material me-2 p-0"
                      >
                        <select
                          className="form-control"
                          name="materialType"
                          value="data"
                          {...register('materialType')}
                        >
                          {!selectedMaterialType && (
                            <option selected>{materialType}</option>
                          )}
                          <option selected>{selectedMaterialType}</option>
                          <option>Cotton</option>
                          <option>Cotton Blend</option>
                          <option>Recycled Polyester Blend</option>
                          <option>Organic Cotton</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-2 justify-content-between ">
                    <label className="pe-1" htmlFor="">
                      Weight
                    </label>
                    <input
                      style={{ width: '70%' }}
                      className="form-control"
                      name="weight"
                      placeholder="gsm"
                      defaultValue={weight}
                      {...register('weight')}
                    />
                  </div>
                  <div className="d-flex mb-2 justify-content-between ">
                    <label className="pe-1" htmlFor="">
                      Size
                    </label>
                    <input
                      style={{ width: '70%' }}
                      className="form-control"
                      name="size"
                      placeholder="Kg"
                      defaultValue={size}
                      {...register('size')}
                    />
                  </div>
                  <div className="d-flex mb-2 justify-content-between ">
                    <label className="pe-1" htmlFor="">
                      Composition
                    </label>
                    <input
                      style={{ width: '70%' }}
                      className="form-control"
                      name="composition"
                      defaultValue={composition}
                      {...register('composition')}
                    />
                  </div>

                  <div className="d-flex mb-2 justify-content-between  ">
                    <label className="pe-1" htmlFor="">
                      Color
                    </label>
                    <div style={{ width: '70%' }} className="row m-0">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0',
                        }}
                      >
                        {colorData ? (
                          <input
                            className="form-control"
                            style={{
                              padding: '15px 15px',
                              width: '70%',
                            }}
                            value={colorData}
                            required
                          />
                        ) : (
                          <input
                            className="form-control"
                            style={{
                              padding: '15px 15px',
                              width: '70%',
                            }}
                            value={materialColor}
                            required
                          />
                        )}

                        <ColorPicker
                          hideTextfield
                          value={color}
                          onChange={handleColorChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-2 radioButtons justify-content-between ">
                    <label className="pe-1" htmlFor="">
                      Factory Source/Nominated/Provide By Me
                    </label>
                    <div style={{ width: '70%' }}>
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            type="checkbox"
                            className="me-1"
                            name="supplier"
                            id="supplier"
                          />
                          <small className="me-2" htmlFor="supplier">
                            Sourced By Supplier
                          </small>
                        </div>
                        <div className="col-md-4">
                          <input
                            type="checkbox"
                            className="me-1"
                            name="nominated"
                            id="nominated"
                          />
                          <small className="me-2" htmlFor="nominated">
                            Nominated Supplier
                          </small>
                        </div>
                        <div className="col-md-4">
                          <input
                            type="checkbox"
                            className="me-1"
                            name="us"
                            id="us"
                          />
                          <small className="me-2" htmlFor="us">
                            Provide by us
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-2 mt-5 pt-5 justify-content-between ">
                    <label className="pe-1" htmlFor="">
                      Additional Information
                    </label>
                    <textarea
                      className="form-control"
                      rows="5"
                      defaultValue={additionalInformation}
                      {...register('additionalInformation')}
                    ></textarea>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <Button
                      onClick={handleDeleteMaterialPart}
                      style={{
                        fontWeight: 'bold',
                        backgroundColor: 'rgb(255 0 0 / 40%)',
                        color: '#6F6A69',
                        marginRight: 5,
                      }}
                    >
                      <DeleteSweepIcon
                        style={{ color: '#6F6A69', fontSize: 30 }}
                      />
                      DELETE
                    </Button>

                    <Button
                      type="submit"
                      style={{
                        fontWeight: 'bold',
                        backgroundColor: '#E7E6E7',
                        color: '#6F6A69',
                      }}
                    >
                      <SaveIcon style={{ color: '#6F6A69', fontSize: 30 }} />
                      Save
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PartDetails;
