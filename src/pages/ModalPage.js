import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const actionBar = (
    <Button onClick={closeModal} primary>
      I Accept
    </Button>
  );
  const modal = (
    <Modal onClose={closeModal} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {/* {showModal && <Modal onClose={closeModal} />} */}
      {showModal && modal}
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          beatae esse doloremque alias voluptate sunt eaque error soluta?
          Nesciunt laudantium facere veniam praesentium maxime porro ullam
          consequuntur incidunt sequi illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          beatae esse doloremque alias voluptate sunt eaque error soluta?
          Nesciunt laudantium facere veniam praesentium maxime porro ullam
          consequuntur incidunt sequi illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          beatae esse doloremque alias voluptate sunt eaque error soluta?
          Nesciunt laudantium facere veniam praesentium maxime porro ullam
          consequuntur incidunt sequi illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          beatae esse doloremque alias voluptate sunt eaque error soluta?
          Nesciunt laudantium facere veniam praesentium maxime porro ullam
          consequuntur incidunt sequi illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          beatae esse doloremque alias voluptate sunt eaque error soluta?
          Nesciunt laudantium facere veniam praesentium maxime porro ullam
          consequuntur incidunt sequi illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          beatae esse doloremque alias voluptate sunt eaque error soluta?
          Nesciunt laudantium facere veniam praesentium maxime porro ullam
          consequuntur incidunt sequi illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          beatae esse doloremque alias voluptate sunt eaque error soluta?
          Nesciunt laudantium facere veniam praesentium maxime porro ullam
          consequuntur incidunt sequi illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          beatae esse doloremque alias voluptate sunt eaque error soluta?
          Nesciunt laudantium facere veniam praesentium maxime porro ullam
          consequuntur incidunt sequi illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          beatae esse doloremque alias voluptate sunt eaque error soluta?
          Nesciunt laudantium facere veniam praesentium maxime porro ullam
          consequuntur incidunt sequi illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          beatae esse doloremque alias voluptate sunt eaque error soluta?
          Nesciunt laudantium facere veniam praesentium maxime porro ullam
          consequuntur incidunt sequi illo!
        </p>
      </div>
    </div>
  );
};

export default ModalPage;
