// src/components/PdfTemplate.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12,
  },
  section: {
    margin: 10,
    padding: 10,
    borderBottom: '1px solid #ccc',
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

const PdfTemplate = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Purchase Order Details</Text>
      </View>

      <View style={styles.section}>
        <Text>Order Number: {formData.orderNumber}</Text>
        <Text>Order Date: {formData.orderDate}</Text>
      </View>

      <View style={styles.section}>
        <Text>Supplier Name: {formData.supplierName}</Text>
        <Text>Supplier Address: {formData.supplierAddress}</Text>
        <Text>Supplier Phone: {formData.supplierPhone}</Text>
        <Text>Supplier Email: {formData.supplierEmail}</Text>
      </View>

      <View style={styles.section}>
        <Text>Item: {formData.item}</Text>
        <Text>Quantity: {formData.quantity}</Text>
        <Text>Unit Price: ${formData.unitPrice}</Text>
        <Text>Total Price: ${formData.totalPrice}</Text>
      </View>

      <View style={styles.section}>
        <Text>Delivery Date: {formData.deliveryDate}</Text>
        <Text>Payment Terms: {formData.paymentTerms}</Text>
      </View>

      <View style={styles.section}>
        <Text>Notes: {formData.notes}</Text>
      </View>
    </Page>
  </Document>
);

export default PdfTemplate;
