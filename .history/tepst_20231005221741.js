//

if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==1)){
    error=7;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==1)&&(sensorVal[0]==1)){
    error=6;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==1)&&(sensorVal[0]==0)){
    error=5;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==1)&&(sensorVal[1]==1)&&(sensorVal[0]==0)){
    error=4;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==1)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
    error=3;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==1)&&(sensorVal[2]==1)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
    error=2;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==1)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
    error=1;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==1)&&(sensorVal[3]==1)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
    error=0;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==1)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
    error=-1;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==1)&&(sensorVal[4]==1)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
    error=-2;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==1)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
    error=-3;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==1)&&(sensorVal[5]==1)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
    error=-4;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==1)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
    error=-5;
}
else if((sensorVal[7]==1)&&(sensorVal[6]==1)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
    error=-6;
}else if((sensorVal[7]==1)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
    error=-7;
}

return  error;

}