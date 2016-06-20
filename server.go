package main

import (
	//"fmt"
	//"io/ioutil"
	"log"
	"net/http"
	//"strings"
)

type Handler struct {
}

func (this *Handler) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	path := req.URL.Path[1:]
	log.Println(path)

	//data, err := ioutil.ReadFile(string(path))

	http.ServeFile(w, req, path)
	//if err == nil {
	//http.ServeFile(w, req, path)
	//} else {
	//w.WriteHeader(404)
	//w.Write([]byte("Not found yo"))
	//}

}

func main() {
	http.Handle("/", new(Handler))
	http.ListenAndServe(":8080", nil)
}
