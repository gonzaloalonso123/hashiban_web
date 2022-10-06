import React from "react";
import "./guide.css";
import FlechaImg from "../../images/izqda.png";
import { Link } from "react-router-dom";
import ManoImg from '../../images/Mano.png';
import TableroImg from '../../images/Tablero.png';
import InterseccionImg from '../../images/Interseccion.png';
import ArmasImg from '../../images/Armas.png';

function Guide() {
  return (
    <div className="instrucciones_container">
      <Link to="/">
        <img src={FlechaImg} id="goBack" />
      </Link>
      <h1><u>Preparando la partida</u></h1>
      <p>
        Primero, separamos las cartas de mercaderes, dinero, y objetos (las
        acciones sobre el mercader van en la pila de objetos). Luego barajamos
        cada pila por separado. <br />
        <br />
        Una vez hecho esto, se distribuye a cada jugador: <br />
        <br />
        &emsp;-cinco billetes aleatorios de la pila de billetes
        <br />
        &emsp;-tres mercaderes aleatorios de la pila de mercaderes
        <br />
        &emsp;-un objeto aleatorio de pila de objetos. (Si algún jugador recibe
        una acción sobre el mercader, debe devolverla a la pila y barajarla de
        nuevo, luego coger otro objeto).
        <br />
      </p>
        <h1>Ejemplo 1: Mano inicial</h1>
        <img src = {ManoImg} alt ="" id = "mano"/>

      <p>
        Los jugadores pueden ver sus cartas, pero deberán ocultar a toda costa
        cuales han obtenido. <br /> <br />
        Se separa de la pila de mercaderes un mercader público, el cual todos
        pueden ver. Luego se pone sobre la mesa la pila de objetos y la pila de
        dinero boca abajo, junto con el mercader público boca arriba. Los
        mercaderes restantes se guardan en la caja sin que ningún jugador los
        vea.
      </p>
      <h1>Ejemplo 2: Disposición de la mesa</h1>
      <img src = {TableroImg} alt ="" id ="tablero"/> 
      <h1><u>Comienzo del juego</u></h1>
      <p>
        Empieza el jugador más anciano. Luego los turnos van en sentido de las
        agujas del reloj.
      </p>
      <h1><u>Objetivo del juego</u></h1>
      <p>
        Gana la partida el jugador que revele todos los mercaderes de su mano
      </p>
      <h1><u>El turno</u></h1>
      <p>
        Lo primero que se hace en cada turno es robar una carta de dinero
        aleatoria de la pila de billetes. <br />
        <br />
        Luego, el jugador tiene tres opciones:
        <br />
        <br />
        <b>1 -Sacar a subasta un objeto de la pila de objetos:</b>
        <br />
        <br />
        &emsp;El jugador levantará una carta de la pila de objetos y la pondrá
        boca arriba en la mesa. Luego, hará la primera puja por ese objeto,
        poniendo el dinero que está dispuesto a pagar sobre la mesa. <br />
        Después, en el orden de las agujas del reloj, cada jugador decidirá si
        aumentar la puja o pasar.
        <br />
        Cuando todos los jugadores hayan hecho sus pujas, el mayor pujante
        pondrá el objeto en su mano, poniendo el dinero pujado al fondo de la
        pila de billetes.
        <br />
        El resto de los jugadores recogerán su dinero de la mesa.
        <br /> Una subasta no acaba mientras haya jugadores dispuestos a
        aumentar la última puja. Un jugador que ha pasado en una ronda, puede
        pujar en la siguiente. (Siempre respetando los turnos)
        <br />
        <br /> En caso de que ningún jugador puje por el objeto, éste irá al
        fondo de la pila, y el jugador que ha sacado el objeto de la pila
        cobrará un billete aleatorio de la pila de billetes.
        <br />
        <br />
        <b>2 -Sacar un lote de su mano a subasta:</b> <br />
        <br /> &emsp;El jugador pondrá uno o más objetos de su mano en la mesa,
        estableciendo un precio inicial por la puja. El lote se subastará entre
        los demás jugadores, y el máximo pujante entregará sus billetes al
        jugador que ha sacado el lote a subasta.
        <br />
        En caso de que ningún jugador esté dispuesto a pagar el precio de
        entrada propuesto, los objetos del lote se pondrán al fondo de la pila
        de objetos, y el jugador que ha sacado el lote a subasta podrá cobrar un
        billete aleatorio de la pila de billetes por cada uno de ellos. <br />
        <br />
        <b>3 -Sacar un mercader al juego:</b> <br />
        <br /> &emsp;Para ello, el jugador debe tener en su mano tres cartas de
        objeto que contengan la misma categoría que el mercader revelado. El
        mercader se pondrá en la mesa boca arriba bajo el control del jugador
        que lo ha sacado. Esta acción consume el turno, es decir, no se puede
        iniciar una subasta tras haber revelado un mercader.
        <br />
        Los objetos utilizados para revelar el mercader se colocarán en la pila
        de objetos. Acto seguido, se barajará la pila de objetos. <br />
        <br />
        Un jugador puede sacar varios mercaderes en un turno siempre y cuando
        existan intersecciones entre ellos. <br />
        Una intersección ocurre cuando un objeto que tiene varias categorías
        comparte categoría con dos o más de los mercaderes revelados. En ese
        caso, el mismo objeto puede servir para revelarlos.
      </p>
      <h1>Ejemplo 3: Intersección</h1>
      <img src = {InterseccionImg} alt ="" id ="interseccion" />
      <h1><u>Fuentes de ingresos</u></h1>
      <p>
        <b>-Mercader:</b>
        <br /> &emsp;Al tener un mercader revelado, siempre que salga a subasta
        un objeto que contenga la categoría del mercader, el jugador que lo
        tenga cobrará un billete aleatorio de la pila de billetes. <br />
        <br />
        <b>-Acción:</b>
        <br /> &emsp;Las acciones salen a subasta desde la pila de objetos.
        Cuando ésto sucede, se realiza una subasta. El jugador que obtenga la
        acción la pondrá boca arriba bajo su control. Siempre que salga a
        subasta un objeto que comparta categoría con el mercader público, los
        poseedores de acciones cobrarán un billete aleatorio de la pila de
        objetos por cada acción que posean.
      </p>
      <h1><u>Armas</u></h1>
      <p>Las armas son los objetos que contienen la categoría arma:</p>
      <img src ={ArmasImg} alt ="" id ="armas"/>
      <p>
        El jugador que posea armas en su mano puede usarlas en cualquier momento
        para eliminar a otro jugador hasta el final del turno actual. <br />
        <br />
        Un jugador muerto no puede: <br />
        &emsp;-Pujar (En caso de haber pujado, el dinero que haya pujado volverá
        a su mano) <br />
        &emsp;-Negociar con otros jugadores o intercambiar objetos o dinero con
        ellos. <br />
        <br />
        Un jugador muerto puede: <br />
        &emsp;-Matar a otro jugador si tiene un arma. <br />
        &emsp;-Revelar un mercader, si es su turno.
      </p>
      <h1><u>Negocios entre jugadores</u></h1>
      <p>
        {" "}
        &emsp;-Todo negocio entre jugadores es válido, y los jugadores pueden
        intercambiar entre sí cartas y dinero en cualquier momento bajo las
        condiciones que negocien. <br />
        &emsp;-Excepciones : Los jugadores no pueden intercambiar mercaderes.
      </p>
      <h1><u>Excepciones generales</u></h1>
      <p>
        &emsp;-Un jugador no cobrará por objetos que formen parte de un lote
        sacado a subasta por ellos mismos. Por ejemplo, si el jugador tiene
        revelado el mercader de comida y saca un lote que contiene el muslo de
        pollo, no cobrará por ese objeto. Sin embargo, si otro jugador saca un
        lote que contiene el muslo de pollo, cobrará por él. Lo mismo sucede con
        las acciones.
        <br /><br />
        &emsp;-Los billetes son indivisibles y no se puede obtener cambio por
        ellos. Sin embargo, un jugador puede retirar un billete pujado para
        sustituirlo por otro al aumentar su puja.
      </p>
      <h1><u>Modalidades</u></h1>
      <p>
        <b>-2 jugadores:</b>
        <br />
        &emsp; Cada jugador comienza el juego con cinco mercaderes en la mano.
        <br />
        <br />
        <b>-Mercader revelado: </b>
        <br />
        &emsp; Cada jugador comienza el juego con un mercader de su elección (de
        su mano) revelado.
      </p>
    </div>
  );
}

export default Guide;
