import { Entity, Column, OneToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { DomPedroNotaFiscal } from './DomPedroNotaFiscal';

@Entity({ database: 'fiscal', name: 'nota_fiscal' })
export class FiscalNotaFiscal {
    @PrimaryColumn()
    id: number;

    @Column()
    numero: number;

    @Column()
    valor: number;

    @Column()
    emitente_cnpj: string;

    @Column()
    nota_fiscal_as: number;

    @OneToOne(() => DomPedroNotaFiscal)
    @JoinColumn({ name: 'nota_fiscal_as' })
    nota_fiscal: DomPedroNotaFiscal;
}
