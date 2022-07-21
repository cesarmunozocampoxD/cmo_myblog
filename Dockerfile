FROM  node:latest
EXPOSE 3000
ENV WORK_DIR /home/node
ENV PROJECT cmo_myblog
USER root

RUN mkdir $WORK_DIR/$PROJECT
COPY $PROJECT/ $WORK_DIR/$PROJECT/
RUN cd $WORK_DIR/$PROJECT/
RUN ls
RUN npm install
RUN npm start

#docker build -t blog-cmo:0.0.1 .
#docker run -it -p 8080:8080 blog-cmo:0.0.1
