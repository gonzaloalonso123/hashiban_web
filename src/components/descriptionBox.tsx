import React from 'react';
import '../styles/App.css';

function DescriptionBox() {
  return (
	<div className='description-section'>
		<div className='description'>
		<p>
			En el antiguo reino de Hashiban, en una acogedora taberna, 
			Se deleitan con cerveza unos amables trasgos.
			Arkuk, que es la simpática camarera, tararea una balada ancestral con gesto despreocupado. <br/>
			Más en el sótano de tal taberna, la mayor subasta clandestina de todo el reino esta teniendo lugar. 
			En ella, un grupo de avariciosos mercaderes y refinados coleccionistas 
			consumen sus ahorros, tratando de obtener los objetos que tanto ansían. 
			Para ello, no dudan en usar el engaño, la persuasión, y la codicia como arma. 
			Todos los participantes son inteligentes criaturas que llevan toda una vida dedicada al comercio y practicando la estafa: han venido con intenciones de llevarse todo el botín. 
			Pero solo uno de ellos se hará con el monopolio, convirtiéndose en el señor de la subasta de Hashiban.
		</p> <br/><br/>
		<a href = "#" className='linkButton'>Como jugar</a>
		</div>
	</div>
  );
}

export default DescriptionBox;