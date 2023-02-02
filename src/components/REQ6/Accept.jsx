import '../css/estilosImag.css'

function Accept() {
  return (
    <div className="card mb-4 mb-lg-0">
      <div className="card-body">
        <p>
          <strong>Nosotros aceptamos:</strong>
        </p>
        <img id='img-1'
          className="me-2"
          width="45px"
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
          alt="Visa"
        />
        <img id='img-2'
          className="me-2"
          width="45px"
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
          alt="American Express"
        />
        <img id='img-3'
          className="me-2"
          width="45px"
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
          alt="Mastercard"
        />
        <img id='img-4'
          className="me-2"
          width="45px"
          src="https://gestion.pe/resizer/KNwIHR06FRCEwMO2iWmgQCdGwuU=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/UZ3CVIIHTFF5LG35D4MHPNCFRA.jpg"
          alt="Diners"
        />
      </div>
    </div>
  );
}

export default Accept;
