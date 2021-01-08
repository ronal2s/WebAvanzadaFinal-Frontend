#!/bin/bash

ROOT=${PWD}

cd ${ROOT}/servidor-configuracion && chmod +x ./build.sh && ./build.sh
cd ${ROOT}/servidor-eureka && chmod +x ./build.sh && ./build.sh
cd ${ROOT}/apigateway && chmod +x ./build.sh && ./build.sh
cd ${ROOT}/compradeeventos && chmod +x ./build.sh && ./build.sh
cd ${ROOT}/microservicio-usuario && chmod +x ./build.sh && ./build.sh
cd ${ROOT}/notificaciones-microservicio && chmod +x ./build.sh && ./build.sh