import React from "react";

const Team = () => {
  const team = [
    {
      id: 1,
      avatar:
        "https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhY2V8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Lorem Ipsum",
      job: "Lorem ipsum dolor",
    },

    {
      id: 2,
      avatar:
        "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Lorem Ipsum",
      job: "Lorem ipsum dolor",
    },
    {
      id: 3,
      avatar:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhY2V8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Lorem Ipsum",
      job: "Lorem ipsum dolor",
    },
    {
      id: 4,
      avatar:
        "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGh1bWFufGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
      name: "Lorem Ipsum",
      job: "Lorem ipsum dolor",
    },
  ];
  return (
    <div className="team-about">
      <p className="title">OUR TEAM</p>
      <div className="team-container">
        {team.map((item) => {
          return (
            <div className="team-item">
              <div
                className="team-avatar"
                style={{ backgroundImage: "url(" + item.avatar + ")" }}
              />
              <p className="team-name">{item.name}</p>
              <p className="team-job">{item.job} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
