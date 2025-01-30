FROM golang:1.23 AS builder

WORKDIR /src/app

COPY . . 

RUN go build main.go

FROM scratch
WORKDIR /src/app
COPY --from=builder /src/app ./app

CMD [ "./app/main" ]