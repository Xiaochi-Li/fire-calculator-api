import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Generated,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "financial-profile" })
export class FinancialProfile {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // @Column()
  // userId: string;

  // @Column("float")
  // mortgage: number;

  // @Column()
  // income: number;

  // @Column()
  // survivingCost: number;

  // @Column()
  // splurgeCost: number;

  // @Column("float")
  // currentSuper: number;

  // @Column("float")
  // currentInvestment: number;

  // @Column("int")
  // expectedLifeSpend: number;

  // @Column("float")
  // expectedInvestmentGrowthRate: number;

  // @Column()
  // currentReport: string;

  // TODO currentAge should be lower than expectedRetirementAge
  @Column("int")
  currentAge: number;
}
