<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="styless.css">
        <title>Cubo</title>
        <script src="js/React0-13-0.js"></script>
        <script src="js/JSXTransformer0-13-0.js"></script>
        <script src="js/jquery-3.1.1.min.js"></script>
        <script src="js_controler/controladorVista.js"></script>
        <script type="text/jsx" src="js_controler/controladorEnvio.js"></script>
    </head>
    <body>
        <div id="agrupar">
            <form name="form1" id="form1"  action="" method="post" onsubmit="return false;">
                <header id="principal">
                    <h1>Cubo</h1>
                </header>
                <nav id="inicializar">
                    <u1>
                        <li>
                            Tamaño del Cubo (NxNxN)  = <input type="number" name="tamanio" id="tamanio" style="width:100px;height:30px" min=1 max=100 required placeholder="1>=N<=100" onchange="deshabilitarCampo();" >
                            <input type="hidden" name="tamanio2" id="tamanio2" value="" />
                        </li>
                        <li>
                            Número de Operaciones (M)= <input type="number"  name="numeroOperaciones" id="numeroOperaciones" style="width:100px;height:30px" min=1 max=1000 required placeholder="1>=M<=1000" onchange="agregarOperaciones();" >
                            <input type="hidden" name="numeroOperaciones2" id="numeroOperaciones2" value="" />
                        </li>
                    </u1>
                </nav>
                <section id="seccion">
                    <article>
                        <header>
                            <hgroup>
                                <h1>Operaciones</h1>                                
                            </hgroup>                            
                        </header>
                        Seleccione un tipo de operación: 
                        <div id="operacionesCubo">

                        </div>
                    </article>
                    <h1 id="enviar"></h1>

                </section>
                <aside id="columna">
                    <h1>Resultado</h1>                                
                    <article id="resultado"></article>
                </aside>
                <footer id="pie">
                    Andrea B.
                </footer>
            </form>
        </div>
    </body>
</html>
