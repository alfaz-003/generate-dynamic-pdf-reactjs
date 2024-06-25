// src/components/PdfTemplate.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 20,
    borderBottom: '2px solid #E84B4B',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#F1C7C7',
    padding: 5,
  },
  sectionContent: {
    padding: 10,
    border: '1px solid #040404',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: '#0F0E0E',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    backgroundColor: '#F6BABA',
    fontWeight: 'bold',
    borderStyle: 'solid',
    borderColor: '#030303',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableCol: {
    borderStyle: 'solid',
    borderColor: '#121111',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableCell: {
    margin: 5,
  },
  footer: {
    marginTop: 20,
    paddingTop: 10,
    borderTop: '2px solid #738DF4',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 40,
  },
});

const PdfTemplate = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
      <Image
          style={styles.logo}
          src="./images/logo.jpeg"
        />
        <Text style={styles.title}>Purchase Order</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Order Details</Text>
        <View style={styles.sectionContent}>
          <Text>Order Number: {formData.orderNumber}</Text>
          <Text>Order Date: {formData.orderDate}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Supplier Information</Text>
        <View style={styles.sectionContent}>
          <Text>Supplier Name: {formData.supplierName}</Text>
          <Text>Supplier Address: {formData.supplierAddress}</Text>
          <Text>Supplier Phone: {formData.supplierPhone}</Text>
          <Text>Supplier Email: {formData.supplierEmail}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Item Details</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableColHeader, { width: '10%' }]}>Item</Text>
            <Text style={[styles.tableColHeader, { width: '15%' }]}>Quantity</Text>
            <Text style={[styles.tableColHeader, { width: '15%' }]}>Unit Price</Text>
            <Text style={[styles.tableColHeader, { width: '20%' }]}>Total Price</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '10%' }]}>{formData.item}</Text>
            <Text style={[styles.tableCol, { width: '15%' }]}>{formData.quantity}</Text>
            <Text style={[styles.tableCol, { width: '15%' }]}>${formData.unitPrice}</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>${formData.totalPrice}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Additional Information</Text>
        <View style={styles.sectionContent}>
          <Text>Delivery Date: {formData.deliveryDate}</Text>
          <Text>Payment Terms: {formData.paymentTerms}</Text>
          <Text>Notes: {formData.notes}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>Thank you for your business!</Text>
      </View>
    </Page>
  </Document>
);

export default PdfTemplate;