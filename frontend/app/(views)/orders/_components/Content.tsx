"use client"

import { Badge } from "@/components/ui/badge"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import useModule from "./useModule.hook"
import moment from "moment"
import numeral from "numeral"

moment.locale('es')

export function Content() {

  const { localData } = useModule()

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 md:gap-8">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Ordenes</CardTitle>
            <CardDescription>
              Maneja tus ordenes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="max-w-[50px]">
                    {'Fecha de Creación'}
                  </TableHead>
                  <TableHead>
                    {'Estatus'}
                  </TableHead>
                  <TableHead>
                    {'Impuestos'}
                  </TableHead>
                  <TableHead>
                    {'Descuentos'}
                  </TableHead>
                  <TableHead>
                    {'Subtotal'}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {localData.processedOrders.map((order) => {
                  return (
                    <TableRow key={order._id}>
                      <TableCell>
                        {moment(order.created).format('LLL')}
                      </TableCell>
                      <TableCell>
                        <Badge color={!order.paid ? 'yellow' : 'green'}>
                          {order.paid ? 'Pagado' : 'Pendiente'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {numeral(order.taxes).format('$0,0.00')}
                      </TableCell>
                      <TableCell>
                        {numeral(order.discounts).format('$0,0.00')}
                      </TableCell>
                      <TableCell>
                        {numeral(order.subtotal).format('$0,0.00')}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
