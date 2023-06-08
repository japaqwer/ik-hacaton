"use client";

import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BackgroundImage from "./BackgroundImage";

export default function Maps1() {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  const [isOpenModal4, setIsOpenModal4] = useState(false);
  const [isOpenModal5, setIsOpenModal5] = useState(false);
  const [isOpenModal6, setIsOpenModal6] = useState(false);
  const [isOpenModal7, setIsOpenModal7] = useState(false);
  const [isOpenModal8, setIsOpenModal8] = useState(false);

  const handleOpenModal1 = () => {
    setIsOpenModal1(true);
  };

  const handleCloseModal1 = () => {
    setIsOpenModal1(false);
  };

  const handleOpenModal2 = () => {
    setIsOpenModal2(true);
  };

  const handleCloseModal2 = () => {
    setIsOpenModal2(false);
  };

  const handleOpenModal3 = () => {
    setIsOpenModal3(true);
  };

  const handleCloseModal3 = () => {
    setIsOpenModal3(false);
  };

  const handleOpenModal4 = () => {
    setIsOpenModal4(true);
  };

  const handleCloseModal4 = () => {
    setIsOpenModal4(false);
  };

  const handleOpenModal5 = () => {
    setIsOpenModal5(true);
  };

  const handleCloseModal5 = () => {
    setIsOpenModal5(false);
  };

  const handleOpenModal6 = () => {
    setIsOpenModal6(true);
  };

  const handleCloseModal6 = () => {
    setIsOpenModal6(false);
  };

  const handleOpenModal7 = () => {
    setIsOpenModal7(true);
  };

  const handleCloseModal7 = () => {
    setIsOpenModal7(false);
  };

  const handleOpenModal8 = () => {
    setIsOpenModal8(true);
  };

  const handleCloseModal8 = () => {
    setIsOpenModal8(false);
  };

  const height = useBreakpointValue({ base: "5px", md: "10px" });
  const width = useBreakpointValue({ base: "5px", md: "10px" });
  const fontSize = useBreakpointValue({ base: "5px", md: "8px" });

  return (
    <>
      <Box>
        <BackgroundImage imageUrl="https://www.open.kg/uploads/posts/2014-02/1391603746_themes-sp-3-images-mapkr_oblasti-pastbisha-djalal-abad.jpg">
          <Button
            top={"50%"}
            left={"30%"}
            onClick={handleOpenModal1}
            height={height}
            width={width}
            fontSize={fontSize}
          >
            1
          </Button>
          <Button
            top={"51%"}
            left={"35%"}
            height={height}
            width={width}
            fontSize={fontSize}
            onClick={handleOpenModal2}
          >
            2
          </Button>
          <Button
            top={"55%"}
            left={"35%"}
            height={height}
            width={width}
            fontSize={fontSize}
            onClick={handleOpenModal3}
          >
            3
          </Button>
          <Button
            top={"35%"}
            left={"45%"}
            height={height}
            width={width}
            fontSize={fontSize}
            onClick={handleOpenModal4}
          >
            4
          </Button>
          <Button
            top={"32%"}
            left={"47%"}
            height={height}
            width={width}
            fontSize={fontSize}
            onClick={handleOpenModal5}
          >
            5
          </Button>
          <Button
            top={"37%"}
            left={"51%"}
            height={height}
            width={width}
            fontSize={fontSize}
            onClick={handleOpenModal6}
          >
            6
          </Button>
          <Button
            top={"47%"}
            left={"46%"}
            height={height}
            width={width}
            fontSize={fontSize}
            onClick={handleOpenModal7}
          >
            7
          </Button>
          <Button
            top={"53%"}
            left={"54%"}
            height={height}
            width={width}
            fontSize={fontSize}
            onClick={handleOpenModal8}
          >
            8
          </Button>

          <Modal isOpen={isOpenModal1} onClose={handleCloseModal1}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Модальное окно 1</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Содержимое модального окна 1</p>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleCloseModal1}>
                  Закрыть
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal isOpen={isOpenModal2} onClose={handleCloseModal2}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>место 2</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box mb={8}>
                  <Flex justify={"space-between"}>
                    <Box>1</Box>
                    <Box>Дарманов Мирбек</Box>
                    <Box>от 12.12.2023 до 01.01.2024</Box>
                  </Flex>
                </Box>
                <Box mb={8}>
                  <Flex justify={"space-between"}>
                    <Box>2</Box>
                    <Box>Дарманов Мирбек</Box>
                    <Box>от 12.12.2023 до 01.01.2024</Box>
                  </Flex>
                </Box>
                <Box mb={8}>
                  <Flex justify={"space-between"}>
                    <Box>3</Box>
                    <Box>Дарманов Мирбек</Box>
                    <Box>от 12.12.2023 до 01.01.2024</Box>
                  </Flex>
                </Box>
              </ModalBody>
              <ModalFooter>
                <Button
                  color={"#fff"}
                  bg={"yellow.400"}
                  _hover={{
                    bg: "yellow.300",
                  }}
                  mr={3}
                  onClick={handleCloseModal2}
                >
                  Закрыть
                </Button>
                <Button
                  color={"#fff"}
                  bg={"yellow.500"}
                  _hover={{
                    bg: "yellow.400",
                  }}
                  mr={3}
                >
                  забронировать
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal isOpen={isOpenModal3} onClose={handleCloseModal3}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Модальное окно 3</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Содержимое модального окна 3</p>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleCloseModal3}>
                  Закрыть
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal isOpen={isOpenModal4} onClose={handleCloseModal4}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Модальное окно 4</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Содержимое модального окна 4</p>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleCloseModal4}>
                  Закрыть
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal isOpen={isOpenModal5} onClose={handleCloseModal5}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Модальное окно 5</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Содержимое модального окна 5</p>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleCloseModal5}>
                  Закрыть
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal isOpen={isOpenModal6} onClose={handleCloseModal6}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Модальное окно 6</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Содержимое модального окна 6</p>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleCloseModal6}>
                  Закрыть
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal isOpen={isOpenModal7} onClose={handleCloseModal7}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Модальное окно 7</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Содержимое модального окна 7</p>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleCloseModal7}>
                  Закрыть
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal isOpen={isOpenModal8} onClose={handleCloseModal8}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Модальное окно 8</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Содержимое модального окна 8</p>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleCloseModal8}>
                  Закрыть
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </BackgroundImage>
      </Box>
    </>
  );
}
