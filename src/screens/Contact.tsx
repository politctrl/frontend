import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  color: ${props => props.theme.textColor};
  font-style: normal;
  padding: 16px;
`;

const PreAddressTxt = styled.p`
  font-size: 18pt;
  font-weight: bold;
`;

const Address = styled.address`
  font-size: 14pt;
  font-style: normal;
  line-height: 1.5;
`;

const Lnk = styled.a`
  color: ${props => props.theme.textColor};
`;

const Contact = () => {
  return (
    <ContactContainer>
      <PreAddressTxt>Contact us:</PreAddressTxt>
      <Address>
        E-mail: <Lnk href="mailto:hello@politctrl.org">hello@politctrl.org</Lnk>
        <br />
        Twitter (DMs open): @<Lnk href="https://twitter.com/politctrl">politctrl</Lnk>
      </Address>
    </ContactContainer>
  );
};

export default Contact;
