package com.pucmm.compradeeventos.repository;

import com.pucmm.compradeeventos.data.Compra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Long> {

    List<Compra> findAllByClientIdOrderByIdDesc(Long clientId);
}
