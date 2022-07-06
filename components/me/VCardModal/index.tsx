import Image from "next/image";
import {
  Button,
  Modal,
  useModal,
  Text,
  Grid,
  Spacer,
  Link,
} from "@nextui-org/react";

import { Icon } from "@components/ui";

import { IconsId } from "@interfaces";

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
            <Grid md={12} css={{ pt: "$4" }}>
              <div>
                <Text b>Christian Quispe - Programador Front End</Text>
                <Text>christianquispecamasca@gmail.com</Text>
                <Spacer />
                <Grid.Container justify="center">
                  <Link
                    href="https://www.linkedin.com/in/christian-quispe-camasca-171266192/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="xs" light auto>
                      <Icon id={IconsId.LinkedIn} size={20} filled />
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/christianquispe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="xs" light auto>
                      <Icon id={IconsId.GitHub} size={20} filled />
                    </Button>
                  </Link>
                </Grid.Container>
              </div>
            </Grid>
          </Grid.Container>
        </Modal.Body>
      </Modal>
      <Button
        size="xs"
        light
        auto
        onClick={() => setVisible(true)}
        aria-label="show qr"
      >
        <Icon id={IconsId.QR} size={20} filled />
      </Button>
    </>
  );
};
