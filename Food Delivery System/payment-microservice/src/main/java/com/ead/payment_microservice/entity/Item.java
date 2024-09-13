package com.ead.payment_microservice.entity;



import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "item_details")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long item_id;

    private String item;
    private Integer quantity;
    private BigDecimal itemprice;

    @ManyToOne
    @JoinColumn(name = "payment_id")
    private Payment payment;

    // Constructors
    public Item() {}

    public Item(String item, Integer quantity, BigDecimal itemprice, Payment payment) {
        this.item = item;
        this.quantity = quantity;
        this.itemprice = itemprice;
        this.payment = payment;
    }

    // Getters and Setters
    public Long getItem_id() {
        return item_id;
    }

    public void setItem_id(Long item_id) {
        this.item_id = item_id;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getItemprice() {
        return itemprice;
    }

    public void setItemprice(BigDecimal itemprice) {
        this.itemprice = itemprice;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }
}
