import React, { Component } from "react";

export default class NotFound extends Component{

    render(){

        //JSX
        return(
            <div className="row mt-5">
                <div className="col">
                    <h1>
                        404. Как ты сюда попал?

                    </h1>
                  <a href="/" title="Вернуться на главную">&larr; На главную</a>
                  <div className="pt-5">
                    <img  src="https://c2n.me/49dZxj9.png" alt="Что смотришь"/>
                  </div>

                </div>
            </div>
        )
    }

}
