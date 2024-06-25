import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PdfTemplate from './PdfTemplate'; // Assuming you have a PDF template component
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'; // Import PDFViewer and PDFDownloadLink to display and download PDF

const PurchaseOrderForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="purchase-order-form">
      <h2>Purchase Order Form</h2>

      <div>
        <label htmlFor="orderNumber">Order Number:</label>
        <input id="orderNumber" type="text" {...register('orderNumber', { required: false })} />
        {errors.orderNumber && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="orderDate">Order Date:</label>
        <input id="orderDate" type="date" {...register('orderDate', { required: false })} />
        {errors.orderDate && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="supplierName">Supplier Name:</label>
        <input id="supplierName" type="text" {...register('supplierName', { required: false })} />
        {errors.supplierName && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="supplierAddress">Supplier Address:</label>
        <input id="supplierAddress" type="text" {...register('supplierAddress', { required: false })} />
        {errors.supplierAddress && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="supplierPhone">Supplier Phone:</label>
        <input id="supplierPhone" type="tel" {...register('supplierPhone', { required: false })} />
        {errors.supplierPhone && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="supplierEmail">Supplier Email:</label>
        <input id="supplierEmail" type="email" {...register('supplierEmail', { required: false })} />
        {errors.supplierEmail && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="item">Item:</label>
        <input id="item" type="text" {...register('item', { required: false })} />
        {errors.item && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input id="quantity" type="number" {...register('quantity', { required: false })} />
        {errors.quantity && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="unitPrice">Unit Price:</label>
        <input id="unitPrice" type="number" step="0.01" {...register('unitPrice', { required: false })} />
        {errors.unitPrice && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="totalPrice">Total Price:</label>
        <input id="totalPrice" type="number" step="0.01" {...register('totalPrice', { required: false })} />
        {errors.totalPrice && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="deliveryDate">Delivery Date:</label>
        <input id="deliveryDate" type="date" {...register('deliveryDate', { required: false })} />
        {errors.deliveryDate && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="paymentTerms">Payment Terms:</label>
        <input id="paymentTerms" type="text" {...register('paymentTerms', { required: false })} />
        {errors.paymentTerms && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="notes">Notes:</label>
        <textarea id="notes" {...register('notes')} />
      </div>

      <button type="submit">Submit</button>
    </form>

{formData && (
    <div>
      <h2>Form Data</h2>

      {/* Render PDF using PDFViewer */}
      <PDFViewer style={{ width: '80%', height: '600px', marginTop: '20px' }}>
        <PdfTemplate formData={formData} />
      </PDFViewer>

      {/* Optionally provide download link */}
      <PDFDownloadLink document={<PdfTemplate formData={formData} />} fileName="purchase_order.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  )}
</div>
);
};


export default PurchaseOrderForm;
