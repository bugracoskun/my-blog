import React, { Component } from 'react'
import { Form,Button,Checkbox} from "semantic-ui-react";
import Image from 'next/image';
import axios from 'axios';

class email extends Component {
    saveKonfigElementHandler(e) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("mail").value;
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
        }
    }

    sendemail(){

    }

    defaultValues(){
        var name = document.getElementById("name");
        var email = document.getElementById("mail");
        var subject = document.getElementById("subject");
        var message = document.getElementById("message");
        name.value="";
        email.value="";
        subject.value="";
        message.value="";
        alert("Başarıyla Gönderildi");
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
        )
    }
}

export default email;