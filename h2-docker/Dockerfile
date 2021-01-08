FROM openjdk:8-jre-slim

EXPOSE 8082
EXPOSE 9082

VOLUME /usr/lib/h2

ENV H2_VERSION "1.4.197"

ADD "https://repo1.maven.org/maven2/com/h2database/h2/${H2_VERSION}/h2-${H2_VERSION}.jar" /var/lib/h2/h2.jar

COPY h2.sh /var/lib/h2/

RUN chmod u+x /var/lib/h2/h2.sh

ENV JAVA_OPTIONS ""

ENV H2_OPTIONS ""

ENTRYPOINT ["/var/lib/h2/h2.sh"]