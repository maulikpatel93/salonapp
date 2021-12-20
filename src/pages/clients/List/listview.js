import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import config from "../../../config";
import { ucfirst } from "../../../helpers/functions";
import { swalConfirm } from "../../../component/Sweatalert2";
import { clientDelete } from "../../../store/slices/clientSlice";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ReactPaginate from 'react-paginate';

const ClientListView = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;
  const view = useSelector((state) => state.client.view);

  const objectData = view && view.data ? view.data : view;

  const handleClientDelete = (e) => {
    const props = JSON.parse(e.currentTarget.dataset.obj);
    const name = ucfirst(props.first_name + " " + props.last_name);
    let confirmbtn = swalConfirm(e.currentTarget, { title: t("are_you_sure_delete_client"), message: name, confirmButtonText: t("yes_delete_it") });
    if (confirmbtn == true) {
      dispatch(clientDelete({ id: props.id }));
    }
  };
  return (
    <>
      {Object.keys(objectData).map((item, i) => {
        let first_name = objectData[item].first_name;
        let last_name = objectData[item].last_name;
        let mobile = objectData[item].mobile;
        return (
          <tr key={i}>
            <td className="pe-0" width="60px">
              <div className="user-initial">jd</div>
            </td>
            <td>Doe</td>
            <td>John</td>
            <td>0400 000 000</td>
            <td>
              <Link to="mailto:email@gmail.com">email@gmail.com</Link>
            </td>
            <td className="ps-0 text-end" width="60px">
              <div className="dropdown d-inline-block setting-dropdown">
                <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                  <i className="far fa-ellipsis-v"></i>
                </button>
                <div className="dropdown-menu dropdown-box dropdown-menu-end" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                  <ul className="p-0 m-0 list-unstyled">
                    <li>
                      <a className="d-flex align-items-center edit-service cursor-pointer">
                        <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                        Edit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ClientListView;
