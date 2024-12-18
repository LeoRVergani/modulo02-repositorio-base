import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

// Product.find() // select * from products


@Entity("products")
export class Product {

        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        name: string

        @Column()
        price: number

        @Column()
        brand: string

        @Column()
        description: string

        @Column()
        status: boolean
}