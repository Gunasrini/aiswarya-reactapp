
import React from "react";

const services = React.createContext();

const contact = React.createContext();

const HooksInfo = React.createContext();

const ServiceProvider = services.Provider;
const ServiceConsumer = services.Consumer;

const ContactProvider = contact.Provider;
const ContactConsumer = contact.Consumer;


export { services, contact, ServiceProvider, ServiceConsumer, ContactProvider, ContactConsumer, HooksInfo }

