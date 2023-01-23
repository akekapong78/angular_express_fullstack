FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./
COPY . ./

# เหมือน npm install แต่ ดีกว่า
RUN npm ci
RUN npx prisma generate
# RUN npx prisma migrate dev --name init   << ต้องทำหลังจาก db run ใน docker-compose

EXPOSE 3000
# CMD [ "npm", "start" ]     << ถ้าสั่งรันเลย จะใช้คำสั่งอื่นไม่ได้แล้ว (ต้องการสั่ง migrate) ใน docker-compose และเพื่อรอ service อื่นเปิดทำงานก่อน


# MY NOTE
# docker build -t backend:0.1 .
# docker run -itd -p 3000:3000 --name backend backend:0.1
# docker exec -it backend ifconfig
# docker exec -it backend ping 172.17.0.2
# docker exec -it backend npx prisma migrate dev --name init
# docker run --name mysql -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=mydb -p 3306:3306 -d mysql:8.0