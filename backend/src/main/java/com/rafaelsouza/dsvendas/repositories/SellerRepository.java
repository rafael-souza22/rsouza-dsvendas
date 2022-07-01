package com.rafaelsouza.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rafaelsouza.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}