import React from "react";
import { Breadcrumb } from "react-bootstrap";

const BreadCrumb = () => {
  const navigation = [
    {
      href: "/home",
      title: "Home",
    },
    {
      href: "/skincancer",
      title: "Skin Cancer",
    },
  ];

  return (
    <Breadcrumb>
      {navigation.map((value, index) => {
        <Breadcrumb.Item href={value.href} key={index} className="white-text">
          {value.title}
        </Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

export default BreadCrumb;
