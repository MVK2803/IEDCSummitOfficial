import React, { useState } from "react";

function Ticket(props) {
  const numberOfSquares = 14;
  const buttonTitleArray=["Register Now","Event Completed","Registrations Closed","Forthcoming Results"]
  const squares = [];
  const { eventName, eventImg, eventDescription, eventLink ,eventButton} =
    props;
  for (let i = 0; i < numberOfSquares; i++) {
    squares.push(
      <div
        key={i}
        className="bg-white w-[15px] h-[15px] rounded-[15px] mr-2"
      ></div>
    );
  }

  return (
    <div
      className="flex-none mb-6  overflow-hidden relative flex flex-col h-[622px] 
    bg-[#189AFF] hover:bg-gradient-to-br from-[#1869ff] to-[#812dd4]
    w-[365.82px] rounded-[30px]"
    >
      <div className="h-[234px] bg-white  self-center m-[19px]  w-11/12 rounded-[30px]">
        <img
          src={eventImg}
          alt="mathew"
          className="rounded-[30px] w-full h-full "
        />
      </div>
      <div className="self-center flex flex-row bg-lime- ">
        <div className="w-[38px] rotate-180  overflow-hidden">
          <div className="w-[75px] h-[75px] bg-white rounded-[75px]"></div>
        </div>
        <div className="ml-2 my-auto mx-auto flex">{squares}</div>
        <div className="w-[38px]   overflow-hidden">
          <div className="w-[75px] h-[75px] bg-white rounded-[75px]"></div>
        </div>
      </div>
      <div className="font-dm-sans">
        <div className="w-11/12 mx-auto  h-fit items-center  mx-auto">
          <h1 className="font-[900] text-3xl leading-tight">{eventName}</h1>
          <p className=" font-[300] text-[18px]">{eventDescription}</p>
        </div>
        <div className="justify-center flex">
          {eventButton == 0 ? (
            <a
              href={eventLink}
              target="_blank"
              className="text-center font-[700] absolute bottom-5 text-xl font-extrabold w-[151px] h-[60px] bg-[#FFFFFF] shadow-md rounded-[30px] flex items-center justify-center hover:bg-[#E1F3FE] hover:border-[#0E79BE] hover:border-4"
              rel="noreferrer"
            >
              {buttonTitleArray[0]}
            </a>
          ) : (
            <a
              
              
              className="text-center font-[700] absolute bottom-5 text-xl font-extrabold w-[151px] h-[60px]  shadow-md rounded-[30px] flex items-center justify-center"
              rel="noreferrer"
            >
              {buttonTitleArray[eventButton]}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ticket;