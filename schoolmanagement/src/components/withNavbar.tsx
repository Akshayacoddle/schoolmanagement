import React from "react";

const withConditionalNavItems = (WrappedComponent: any) => {
  return function ConditionalNavItems(props: any) {
    const role = localStorage.getItem("role");
    const navItems =
      role === "admin"
        ? {
            Exam: "/exam",
            "Upload Question": "/uploadquestion",
            "Generate Hall Ticket": "/hallticket",
          }
        : {
            Feedback: "/feedback",
            "View Hall Ticket": "/view",
          };
    return <WrappedComponent {...props} navItems={navItems} />;
  };
};

export default withConditionalNavItems;
