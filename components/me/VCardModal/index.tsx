import Image from "next/image";
import { Button, Modal, useModal, Text, Grid, Table } from "@nextui-org/react";

import { useDialog } from "../../../hooks/useDialog";

interface VCardProps {
  src: string;
}

export const VCardModal: React.FC<VCardProps> = ({ src }) => {
  const { setVisible, bindings } = useModal();

  return (
    <>
      <Modal blur {...bindings}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Escanea y guarda mis datos de contacto
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container>
            <Grid md={12}>
              <Image
                height={400}
                width={400}
                src={src}
                alt="Christian Quispe vCard"
              />
            </Grid>
            <Grid md={12}>
              <Table
                compact
                aria-label="Example static compact collection table"
                css={{
                  height: "auto",
                  minWidth: "100%",
                }}
              >
                <Table.Header>
                  <Table.Column>Dato</Table.Column>
                  <Table.Column>Valor</Table.Column>
                </Table.Header>
                <Table.Body>
                  <Table.Row key="1">
                    <Table.Cell>Nombre</Table.Cell>
                    <Table.Cell>Christian Quispe</Table.Cell>
                  </Table.Row>
                  <Table.Row key="2">
                    <Table.Cell>Posición</Table.Cell>
                    <Table.Cell>Programador Front End</Table.Cell>
                  </Table.Row>
                  <Table.Row key="3">
                    <Table.Cell>Email</Table.Cell>
                    <Table.Cell>christianquispecamasca@gmail.com</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid>
          </Grid.Container>
        </Modal.Body>
      </Modal>
      <Button onClick={() => setVisible(true)}>Code</Button>
    </>
  );
};
