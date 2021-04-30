import React, { Component } from 'react'
import { Form,Button,Checkbox} from "semantic-ui-react";
import Image from 'next/image';
import axios from 'axios';

class email extends Component {
    saveKonfigElementHandler(e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        if(name!="" && email!="" && subject!="" && message!="" ){
            var emailcheck=this.ValidateEmail(email)
            if(emailcheck){
                axios
                .post('http://localhost:3000/api/sendmail', {
                    name: name,
                    email: email,
                    subject: subject,
                    text: message
                })
                .then(response => {
                    console.log(response);
                    if(response.data.status){
                        this.defaultValues();
                    }else{
                        alert("HATA");
                    }
                });
                //this.defaultValues();
            }
        }else{
            alert("Lütfen bütün alanları doldurun");
        }
    }

    sendemail(){

    }

    defaultValues(){
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var subject = document.getElementById("subject");
        var message = document.getElementById("message");
        name.value="";
        email.value="";
        subject.value="";
        message.value="";
        setTimeout(function(){
            alert("Başarıyla Gönderildi");
        },200)
    }

    ValidateEmail(mail) 
    {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
        return (true)
    }
        //alert("You have entered an invalid email address!")
        return (false)
    }

    render() {
        return (
            <div>
                <section id="contact">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-offset-1 col-md-10 col-sm-12">
                                    <h2>Merhaba</h2>
                                    <p>Benimle her zaman iş, proje, fikir alışverişi veya diğer durumlar için iletişime geçebilirsiniz.</p>

                                    <form>
                                        <div className="col-md-4 col-sm-4">
                                            <input name="name" type="text" className="form-control" id="name" placeholder="İsim"/>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <input name="email" type="email" className="form-control" id="email" placeholder="Mail Adresi"/>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <input name="subject" type="text" className="form-control" id="subject" placeholder="Konu"/>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <textarea name="message" rows="5" className="form-control" id="message" placeholder="Mesaj"></textarea>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <button className="form-control" id="submit" onClick={(e)=>this.saveKonfigElementHandler(e)}>Gönder</button>
                                        </div>
                                    </form>
                            </div>

                        </div>
                    </div>
                </section>

                <style jsx>{`
                    #contact button {
                        height: 50px;
                    }
                      
                    #contact button[id="submit"] {
                        background: #bfba55;
                        border-radius: 100px;
                        border: none;
                        color: #ffffff;
                        font-weight: bold;
                        transition: all 0.4s ease-in-out;
                    }
                      
                    #contact button[id="submit"]:hover {
                        background: #333;
                    }
                `}</style>
            </div>

            
            /*
            <div className="mycontactcontainer">
                <div className="mailphoto">
                    <Image
                    src="/mail.png"
                    layout="fixed"
                    width={150}
                    height={150}
                    style={{}}
                    />
                </div>

                <Form>
                    <Form.Field>
                        <label>İsim</label>
                        <input id="name" placeholder='İsminiz' />
                    </Form.Field>
                    <Form.Field>
                        <label>Mail Adresi</label>
                        <input id="mail" type="email" placeholder='Mail Adresiniz' />
                    </Form.Field>
                    <Form.Field>
                        <label>Konu</label>
                        <input id="subject" placeholder='Lütfen Konuyu Belirtiniz' />
                    </Form.Field>
                    <Form.Field>
                        <Form.TextArea id="message" label='Lütfen Mesajınızı Yazınız' placeholder='Mesajınız' />
                    </Form.Field>
                    <Button style={{width:"100%"}} color='green' onClick={(e)=>this.saveKonfigElementHandler(e)}>Gönder</Button>
                </Form>
                
                <style jsx>{`
                    .mailphoto{
                        text-align: center;
                    }
                    .mycontactcontainer{
                        width: 500px;
                        height: 500px;
                    }
                `}</style>
            </div>
            */
        )
    }
}

export default email;