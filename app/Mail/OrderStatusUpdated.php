<?php

namespace App\Mail;

use App\Models\Order;
use Barryvdh\DomPDF\Facade\Pdf as FacadePdf;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Attachment;

class OrderStatusUpdated extends Mailable
{
    use Queueable, SerializesModels;

    public $order;
    public $invoiceData;

    public function __construct(Order $order, $invoiceData = null)
    {
        $this->order = $order;
        $this->invoiceData = $invoiceData;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Order Status Updated',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'mails.orderStatusUpdated',
            with: [
                'orderNumber' => $this->order->order_number,
                'newStatus' => $this->order->status,
            ],
        );
    }

    public function build()
    {
        // Generate the PDF from your invoice template with invoiceData
        $pdf = FacadePdf::loadView('mails.invoicePDF', [
            'order' => $this->order,
            'invoiceData' => $this->invoiceData,
        ]);

        // Convert the PDF to binary data
        $pdfData = $pdf->output();

        return $this->subject('Order Status Updated')
            ->attachData($pdfData, 'invoice.pdf', [
                'mime' => 'application/pdf',
            ]);
    }
}
