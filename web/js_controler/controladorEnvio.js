/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Enviar = React.createClass({
              iniciar: function() {
                React.render(<ConsumirPost />, document.getElementById("resultado"))
              },

              render: function() {
                return (
                  <h1>
                    {}
                    <input type="submit" id="enviar" onClick={this.iniciar} value="Enviar" />
                  </h1>
                );
              }
            });

            React.render(<Enviar />,document.getElementById('enviar'));
            
            
            var ConsumirPost = React.createClass({
                getInitialState: function () {
                var tamanio = document.getElementById('tamanio').value;
                var numeroOperaciones = document.getElementById('numeroOperaciones').value;
                procesarCubo = {
                        'size': tamanio,
                        'numberOperations': numeroOperaciones
                       }
		if (numeroOperaciones != null) {
                    var operations = [];
                        for (var i = 0; i < Number(numeroOperaciones); i++) {
                            var tipoOperacion = document.getElementById('tipoOperacion'+ i).value;
                            if (tipoOperacion != null && "update" === tipoOperacion) {
                                operations.push({
                                     'operation': 'update',
                                     'x': document.getElementById("x"+i).value,
                                     'y': document.getElementById("y"+i).value,
                                     'z': document.getElementById("z"+i).value,
                                     'w': document.getElementById("w"+i).value
                                });
                            } else if (tipoOperacion != null && "query" === tipoOperacion) {
                                operations.push({
                                    'operation': 'query',
                                    'x1': document.getElementById('x1'+i).value,
                                    'y1': document.getElementById('y1'+i).value,
                                    'z1': document.getElementById('z1'+i).value,
                                    'x2': document.getElementById('x2'+i).value,
                                    'y2': document.getElementById('y2'+i).value,
                                    'z2': document.getElementById('z2'+i).value
                                });
                            }
                        }
                    }
                   procesarCubo.operations = operations;
		   return {text: procesarCubo};
                },
                componentDidMount: function(){
                    $.ajax({
                        type: "POST",
                        url: "http://localhost:8084/Back/webresources/cubeControler/postResponseOperations",
                        data : JSON.stringify(this.state.text),
                        dataType: "text",
                        contentType: "application/json"
                    }).then(function(data) {
                        this.text="";
                        z = JSON.parse(data);
                        for (var i = 0; i < z.length; i++) {
                          if(z[i]!=="" && z[i]!==null && typeof(z[i])!== "undefined"){
                              this.text=this.text+z[i]+"<br>";
                              
                          }
                        }
                        
                        document.getElementById('resultado').innerHTML=this.text;
                        
                    })
                },
                render: function() {
                    return <h ></h>;
                }
            });