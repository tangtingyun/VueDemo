package main

import (
	"fmt"
	"net/http"
	"strings"
	"log"
	"html/template"
)

type MyMux struct {
}

func (p *MyMux) ServeHttp(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path == "/" {
		sayHelloName(w, r)
		return
	}
	http.NotFound(w, r)
	return
}
func sayHelloName(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	fmt.Println(r.Form)
	fmt.Println("path", r.URL.Path)
	fmt.Println("scheme", r.URL.Scheme)
	fmt.Println(r.Form["url_long"])
	for k, v := range r.Form {
		fmt.Println("Key", k)
		fmt.Println("val:", strings.Join(v, ""))
	}
	fmt.Fprint(w, "hello Zyf!")
}

func login(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Method)
	if r.Method == "GET" {
		t, _ := template.ParseFiles("index.html")
		t.Execute(w,nil)
	} else {
		r.ParseForm()
		fmt.Println("username:", r.Form["username"])
		fmt.Println("password:", r.Form["password"])
	}
}

func testNet() {
	// 	http.HandleFunc("/", sayHelloName)
	// http.HandleFunc("/login", login)
	//h := http.FileServer(http.Dir("/Users/zhangyifei/Downloads/mygithub/VueDemo"))
	// 设置静态目录
	fsh := http.FileServer(http.Dir("/Users/zhangyifei/Downloads/mygithub/VueDemo"))
    http.Handle("/VueDemo/", http.StripPrefix("/VueDemo/", fsh))
    err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("Error:", err)
	}
}


func main() {
	testNet();
}
