import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const BreadCrumb = ({ navigation }) => {
  return (
    <Breadcrumb>
      {navigation.map((value, index) => {
        return (
          <LinkContainer to={value.href}>
            <Breadcrumb.Item active={value.active} className="link-color">
              {value.title}
            </Breadcrumb.Item>
          </LinkContainer>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadCrumb;
