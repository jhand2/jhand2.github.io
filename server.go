package main

import (
	"log"
	"net/http"
)

type Handler struct {
}

func (this *Handler) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	path := req.URL.Path[1:]
	log.Println(path)
	http.ServeFile(w, req, path)
}

func main() {
	http.Handle("/", new(Handler))
	http.ListenAndServe(":8080", nil)
}
