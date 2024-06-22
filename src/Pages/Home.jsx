import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
  showProducts,
} from "../Redux/ProductSlice";
import { Row, Col, Card, Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_gOcUcVLOB8WHo8pdXlNjPxhaJFJI2Q5aVOP-taAQ-UVr2Qs9fRaaZwbENlsGDxeTx8&usqp=CAU",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FGpgNz2m2baA4eNrss05i6Wa7bPvfPex1shWOFaqtKm9YnRBT8e6a7_z9_EMBapVQto&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqI4rUySoCGnbbaaqvE5GY5vQWsfSoq42pTYRjTB1Cgyt6EQDEMbl5QpC4HijBXfA-Mhc&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-cNt0qxOSOlM_BtmLqJ-3vZKkFyc0TPWWw&s",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://images.macrumors.com/t/9fGagkKlecywCU06NLh6pmqJLyw=/1600x/article-new/2017/09/space-gray-silver-iphone-x.jpg",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEHYrgZ1eHOZiXwJJby45G3_OT0UJ0jZpVTfVFpKBIJE4iWfYvR9-OVc4p5tHvCXNsxk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxP-e9_HO2cyUaz4rCrwCLFlVgEuatQfbRpw6T427ydIe-vCqR0dqn_N_Iq_ggr10RtYk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxyKRr3H9KKYYyiFOR6mwwgOqqUI0lAQa9PwOANBsSejQLGOWf5cshKT-HwiyQAl8qcI&usqp=CAU",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6FmICfWyGspSPv3ERx0gy0qIohnoSBWc-OLnHF3bOuoRfYlKt7erSb9ut7A4SA_eJps&usqp=CAU",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJsvhHI8HOzFt3ajaXhgt_RRjXWFqWE0SRyTEN75YHHxw4yw5o4It6LPuULmyDblOROmA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGghU7Ca3uhcfYYMQeYVhXdvOrEdRjQVzNlDdl-bP907NQX58BwZV-G_kTbMflb_XfSwc&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGghU7Ca3uhcfYYMQeYVhXdvOrEdRjQVzNlDdl-bP907NQX58BwZV-G_kTbMflb_XfSwc&usqp=CAU",
      ],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKD2A3v--WPgFDzDMHlWcreUfjpzA6_joNnG4iMjif1o3iadN_uk2PHxJx25OZ2Ka1Ok&usqp=CAU",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05w2LWcEDGuyuohQKK-6Qv4UPPFGscixN9Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTMeE7kvLtxDRn3eQr0v2KlkhYBUGwlEqLageXDyzzNzYRGwobFzhJX3jYONODUcxp38&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-Ymhvh4kk17fp2UpjqYkX9ZuaqfSQWpVbpMpiQwaZQRxfsBpjNbU4uV4UgfzbMKjieo&usqp=CAU",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huaweis re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJ_K3u738aVy3XakFCO2xWvg8v7mVA9Qn0gGiHT39teBcmzlLrI_0EaOr5PHixOP9dMI&usqp=CAU",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTXFhByw2Klqc7pEXIEc-V_TvKY7Ue5bur4b08IuOdyrFFdasISJozU9ii67tT9grYNs&usqp=CAU",
        "https://5.imimg.com/data5/ECOM/Default/2023/11/359522910/VW/HC/OZ/47699750/sa9813811ea5a4d57877de531ccf6c61dx-500x500.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhoFSNt6hO9mmPWm4uQ5VCR13w5BbCmwLMomdAbFFJu3y4u9iJVvkM2Yu4Bivb4-9QsU&usqp=CAU",
      ],
    },
  ];

  const dispatch = useDispatch();
  const List = useSelector((state) => state.prodreducer);

  useEffect(() => {
    dispatch(showProducts(products));
  }, [dispatch]);

  const handleInc = (id, quantity) => {
    dispatch(incrementQuantity({ id }));
  };
  const handleDec = (id, quantity) => {
    dispatch(decrementQuantity({ id }));
  };

  const Remove = (id, quantity) => {
    dispatch(removeProduct({ id }));
  };

  return (
    <section>
      <Container>
        <Row className="gx-4 gy-2 gx-lg-5">
          {List.map((ele, index) => {
            return (
              <div key={index} className="product">
                <Col className="col-md-4">
                  <Carousel>
                    {ele.images.map((element, i) => {
                      return (
                        <Carousel.Item key={i}>
                          <img src={element} />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </Col>
                <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>{ele.title}</Card.Title>
                    <Card.Text>{ele.description}</Card.Text>
                    <Card.Text>
                      <h4><strong>${ele.price}</strong></h4>
                    </Card.Text>
                    <div className="quantity">
                      <span> 
                         <button
                          onClick={() => handleDec(ele.id, ele.quantity || 1)}
                        >
                          -
                        </button>
                      </span>
                      <span> {ele.quantity ? ele.quantity : 1} </span>
                      <span>
                        <button
                          onClick={() => handleInc(ele.id, ele.quantity || 1)}
                        >
                          +
                        </button>
                      </span>
                    </div>
                    <div><br/>
                    <hr />
                  <div className="d-flex justify-content-between align-content-center flex-wrap">
                    <h3 className="text-muted">Shipping:</h3>
                    <h3>FREE</h3>
                  </div>
                  <div className="d-flex justify-content-between align-content-center flex-wrap">
                    <h3 className="text-muted">Sub-total: </h3>
                    <h3>
                      ${ele.price * ele.quantity || ele.price}.00
                    </h3>
                  </div>
                  <hr />
                      <button
                        className="btn btn-danger"
                        onClick={() => Remove(ele.id, ele.quantity || 1)}
                      >
                        Remove
                      </button>
                    </div>
                  </Card.Body>
                </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Home;
