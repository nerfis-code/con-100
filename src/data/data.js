
export const accountsName = {
    // Activos Corrientes
    ecb: 'Efectivo Caja y Banco', // 1000
    cj: 'Caja', // 01
    b: 'Banco', // 02

    cxc: 'Cuentas por Cobrar', // 1002
    ce: 'Clientes', // 01

    pcd: 'Provisión para cuentas dudosas', // 1003

    i: 'Inventario', // 1004

    gpxa: 'Gastos Pagados por adelantado', // 1007
    s: 'Seguros', // 01
    p: 'Patentes', // 03

    a: 'Acciones', // 1100

    ppe: 'Propiedad, Planta y Equipo', // 12
    t: 'Terrenos', // 1200
    e: 'Edificios', // 1201
    dae: 'Depreciación Acumulada - Edificios', // 1202
    meo: 'Muebles y equipos de Oficina', // 1203
    dameo: 'Depreciación Acumulada - Muebles y equipos de Oficina', // 1204
    et: 'Equipo de transporte', // 1205
    daet: 'Depreciación Acumulada - Equipo de transporte', // 1206

    f: 'Fianzas', // 1401
    d: 'Depósitos', // 1402

    // Cuentas de Pasivos

    cxp: 'Cuentas por Pagar', // 2001
    pl: 'Proveedores Locales', // 01
    pe: 'Proveedores Extranjeros', // 02
    pxpc: 'Préstamos por Pagar Corto Plazo', // 2003
    pxpl: 'Préstamos por Pagar Largo Plazo', // 2100
    hxpl: 'Hipotecas por Pagar Largo Plazo', // 2102

    // 4- Cuentas de Ingresos
    // 40- Ingresos Ordinarios
    v: 'Ventas',
    dv: 'Devoluciones en Ventas',
    dev: 'Descuentos en Ventas',

    // 5- Cuentas de Costos
    // 50- Consto de Ventas
    c: 'Compras', // 5000
    fc: 'Fletes en Compras', // 5001
    dc: 'Devoluciones en Compras', // 5002
    dec: 'Descuentos en Compras', // 5003

    // 6- Cuentas de Gastos
    // 60- Gastos Operacionales
    gv: 'Gastos de Ventas', // 6000
    gga: 'Gastos Generales y Administrativos', // 6100

    // 62- Cuentas de Gastos
    gf: 'Gastos Financieros'
}
export const controlAccounts = [
    accountsName.ecb,
    accountsName.cxc,
    accountsName.pcd,
    accountsName.i,
    accountsName.gpxa,
    accountsName.a,
    accountsName.ppe,
    // accountsName.t,
    // accountsName.e,
    accountsName.dae,
    // accountsName.meo,
    accountsName.dameo,
    // accountsName.et,
    accountsName.daet,
    accountsName.f,
    accountsName.d,
    accountsName.cxp,
    accountsName.pxpc,
    accountsName.pxpl,
    accountsName.hxpl,
    accountsName.v,
    accountsName.dv,
    accountsName.dev,
    accountsName.c,
    accountsName.fc,
    accountsName.dc,
    accountsName.dec,
    accountsName.gv,
    accountsName.gga,
    accountsName.gf,
]
export const auxiliarAccounts = [
    accountsName.cj,    // 'Caja' 01
    accountsName.b,     // 'Banco'  02
    accountsName.ce,    // 'Clientes'  01
    accountsName.s,     // 'Seguros'  01
    accountsName.p,     // 'Patentes'  03
    accountsName.pl,    // 'Proveedores Locales',  01
    accountsName.pe,    // 'Proveedores Extranjeros', // 02
]
export const auxiliarByControl = {
    [accountsName.ecb]: [accountsName.cj, accountsName.b,],
    [accountsName.cxc]: [accountsName.ce],
    [accountsName.gpxa]: [accountsName.s, accountsName.p],
    [accountsName.cxp]: [accountsName.pl, accountsName.pe],
    [accountsName.ppe]: [accountsName.e, accountsName.et, accountsName.meo] // caso especial

}
export function getAllControlNames() {
    return Object.values(accountsName)
        .filter(acc => !auxiliarAccounts.includes(acc))
}

export function getAuxiliariesByControl(control) {
    return {
        [accountsName.ecb]: [accountsName.cj, accountsName.b],
        [accountsName.cxc]: [accountsName.ce],
        [accountsName.gpxa]: [accountsName.s, accountsName.p],
        [accountsName.cxp]: [accountsName.pl, accountsName.pe]
    }[control] ?? []
}
export const DAILY_DEFAUL = {
    propietaryName: "",
    type: "",
    year: 95,
    records: {
        "21/5": {
            0: { account: "Efectivo Caja y Banco", amount: 5000, action: "debit" }
        }
    }
}
