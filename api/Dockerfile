FROM openjdk
EXPOSE 9522
VOLUME /tmp
ADD api/target/api.jar /app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-Duser.timezone=GMT+7","-jar","/app.jar"]
