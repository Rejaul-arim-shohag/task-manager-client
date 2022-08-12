import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";
import { AiOutlineCalendar, AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { ListTaskByStatus } from '../../ApiRequest/APIRequest';
import { UpdateToDO } from '../../Helper/UpdateHelper';
import { DeleteToDo } from '../../Helper/DeleteHelper';

const New = () => {
    useEffect(() => {
        ListTaskByStatus("New")
    }, [])
    const NewList = useSelector((state) => state.task.New);
    const DeleteItem = (id) => {
        DeleteToDo(id).then((result)=>{
            if(result===true){
                ListTaskByStatus("New")
            }
        })
    }
    const statusChangeItem = (id, status) => {
        debugger;
        UpdateToDO(id, status).then((result)=>{
            if(result===true){
                debugger;
                ListTaskByStatus("New")
            }
        })
    }
    return (
        <>
            <Container fluid={true} className="content-body">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-6 col-lg-8 px-3">
                        <h5>New Task</h5>
                    </div>
                    <div className="col-12 float-end col-md-6 col-lg-4 px-2">
                        <div className="row">
                            <div className="col-8">
                                <input className="form-control w-100" />
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary w-100">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-0 m-0">
                    {
                        NewList.map((item, index) =>
                            <div key={index.toString()} className="col-12 col-lg-4 col-sm-6 col-md-4  p-2">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="animated fadeInUp">{item.title}</h6>
                                        <p className="animated fadeInUp">{item.description}</p>
                                        <p className="m-0 animated fadeInUp p-0">
                                            <AiOutlineCalendar /> {item.createdDate}
                                            <a onClick={()=>statusChangeItem(item._id,item.status)} className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                            <a onClick={()=>DeleteItem(item._id)} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                            <a className="badge float-end bg-info">{item.status}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </Container>
        </>
    );
};

export default New;