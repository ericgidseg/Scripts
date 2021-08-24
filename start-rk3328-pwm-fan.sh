#!/bin/bash
echo 0 > /sys/class/pwm/pwmchip0/export   
echo 0 > /sys/class/pwm/pwmchip0/pwm0/enable 
echo 50000 > /sys/class/pwm/pwmchip0/pwm0/period 
echo 1 > /sys/class/pwm/pwmchip0/pwm0/enable   
while true 
do         
temp=$(cat /sys/class/thermal/thermal_zone0/temp)         
if [ $temp -gt 53000 ]; 
then                   #温度可改                 
echo 100 > /sys/class/pwm/pwmchip0/pwm0/duty_cycle;
elif  [ $temp -gt 48000 ];
then
echo 45000 > /sys/class/pwm/pwmchip0/pwm0/duty_cycle;
else
echo 49990 > /sys/class/pwm/pwmchip0/pwm0/duty_cycle;
fi         
sleep 1s;
done
