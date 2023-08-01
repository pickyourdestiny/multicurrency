import React, { useState, useCallback, useRef } from "react"
import "./App.css"
import {
  NumberBox,
  Button as NumberBoxButton,
} from "devextreme-react/number-box"
import { Button } from "devextreme-react"
import { SelectBox } from "devextreme-react/select-box"
import { Popover } from "devextreme-react/popover"

function App() {
  const [currencyFormat, setCurrencyFormat] = useState({
    type: "currency",
    currency: "USD",
  })
  const [value, setValue] = useState(1400.23)

  const popOverInstance = useRef(null)

  const changeValue = useCallback((e) => {
    setValue(e.value)
  }, [])

  const changeCurrency = (e) => {
    if (e.value) {
      setCurrencyFormat((previousValue) => ({
        ...previousValue,
        currency: e.value.cc,
      }))
    }
  }

  const setPopOverInstance = (e) => {
    popOverInstance.current = e.component
  }

  const renderSelectBox = useCallback(() => {
    function closePopOver() {
      popOverInstance.current.hide()
    }

    return (
      <>
        <div className='currency-title'>
          <span style={floatRight}>
            <Button
              icon='remove'
              stylingMode='text'
              type='normal'
              onClick={closePopOver}
            />
          </span>
          <span>
            Search by entering the currency code or country/currency name
          </span>
        </div>

        <SelectBox
          width='250px'
          onValueChanged={changeCurrency}
          items={currencies}
          placeholder='Select Currency'
          valuExpr='cc'
          displayExpr={displayExpr}
          searchEnabled='true'
          dropDownOptions={dropDownOptions}
          showClearButton={true}
        />
      </>
    )
  }, [])

  return (
    <div className='App'>
      <div className='dx-fieldset'>
        <div className='dx-field'>
          <div className='dx-field-label'>Multi-Currency NumberBox</div>
          <div className='dx-field-value'>
            <NumberBox
              format={currencyFormat}
              value={value}
              onValueChanged={changeValue}
              showClearButton={true}
            >
              <NumberBoxButton
                name='drop'
                location='before'
                options={buttonOptions}
              />
              <NumberBoxButton name='clear' location='after' />
            </NumberBox>
            <Popover
              target='#currency-button'
              showEvent='mouseenter'
              width={300}
              animation={animationConfig}
              contentRender={renderSelectBox}
              onInitialized={setPopOverInstance}
            ></Popover>
          </div>
        </div>
      </div>
    </div>
  )
}

function displayExpr(object) {
  return object && `${object.cc}: ${object.name}`
}

const dropDownOptions = { width: "250px" }

const buttonOptions = {
  stylingMode: "text",
  focusStateEnabled: true,
  hoverStateEnabled: true,
  hint: "change currency",
  icon: "money",
  elementAttr: { id: "currency-button" },
}

const animationConfig = {
  show: {
    type: "pop",
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
  },
  hide: {
    type: "fade",
    from: 1,
    to: 0,
  },
}

const floatRight = { float: "right" }

const currencies = [
  { cc: "AED", name: "UAE dirham" },
  { cc: "AFN", name: "Afghan afghani" },
  { cc: "ALL", name: "Albanian lek" },
  { cc: "AMD", name: "Armenian dram" },
  { cc: "ANG", name: "Netherlands Antillean gulden" },
  { cc: "AOA", name: "Angolan kwanza" },
  { cc: "ARS", name: "Argentine peso" },
  { cc: "AUD", name: "Australian dollar" },
  { cc: "AWG", name: "Aruban florin" },
  { cc: "AZN", name: "Azerbaijani manat" },
  {
    cc: "BAM",

    name: "Bosnia and Herzegovina konvertibilna marka",
  },
  { cc: "BBD", name: "Barbadian dollar" },
  { cc: "BDT", name: "Bangladeshi taka" },
  { cc: "BGN", name: "Bulgarian lev" },
  { cc: "BHD", name: "Bahraini dinar" },
  { cc: "BIF", name: "Burundi franc" },
  { cc: "BMD", name: "Bermudian dollar" },
  { cc: "BND", name: "Brunei dollar" },
  { cc: "BOB", name: "Bolivian boliviano" },
  { cc: "BRL", name: "Brazilian real" },
  { cc: "BSD", name: "Bahamian dollar" },
  { cc: "BTN", name: "Bhutanese ngultrum" },
  { cc: "BWP", name: "Botswana pula" },
  { cc: "BYR", name: "Belarusian ruble" },
  { cc: "BZD", name: "Belize dollar" },
  { cc: "CAD", name: "Canadian dollar" },
  { cc: "CDF", name: "Congolese franc" },
  { cc: "CHF", name: "Swiss franc" },
  { cc: "CLP", name: "Chilean peso" },
  { cc: "CNY", name: "Chinese/Yuan renminbi" },
  { cc: "COP", name: "Colombian peso" },
  { cc: "CRC", name: "Costa Rican colon" },
  { cc: "CUC", name: "Cuban peso" },
  { cc: "CVE", name: "Cape Verdean escudo" },
  { cc: "CZK", name: "Czech koruna" },
  { cc: "DJF", name: "Djiboutian franc" },
  { cc: "DKK", name: "Danish krone" },
  { cc: "DOP", name: "Dominican peso" },
  { cc: "DZD", name: "Algerian dinar" },
  { cc: "EEK", name: "Estonian kroon" },
  { cc: "EGP", name: "Egyptian pound" },
  { cc: "ERN", name: "Eritrean nakfa" },
  { cc: "ETB", name: "Ethiopian birr" },
  { cc: "EUR", name: "European Euro" },
  { cc: "FJD", name: "Fijian dollar" },
  { cc: "FKP", name: "Falkland Islands pound" },
  { cc: "GBP", name: "British pound" },
  { cc: "GEL", name: "Georgian lari" },
  { cc: "GHS", name: "Ghanaian cedi" },
  { cc: "GIP", name: "Gibraltar pound" },
  { cc: "GMD", name: "Gambian dalasi" },
  { cc: "GNF", name: "Guinean franc" },
  { cc: "GQE", name: "Central African CFA franc" },
  { cc: "GTQ", name: "Guatemalan quetzal" },
  { cc: "GYD", name: "Guyanese dollar" },
  { cc: "HKD", name: "Hong Kong dollar" },
  { cc: "HNL", name: "Honduran lempira" },
  { cc: "HRK", name: "Croatian kuna" },
  { cc: "HTG", name: "Haitian gourde" },
  { cc: "HUF", name: "Hungarian forint" },
  { cc: "IDR", name: "Indonesian rupiah" },
  { cc: "ILS", name: "Israeli new sheqel" },
  { cc: "INR", name: "Indian rupee" },
  { cc: "IQD", name: "Iraqi dinar" },
  { cc: "IRR", name: "Iranian rial" },
  { cc: "ISK", name: "Icelandic kr\u00f3na" },
  { cc: "JMD", name: "Jamaican dollar" },
  { cc: "JOD", name: "Jordanian dinar" },
  { cc: "JPY", name: "Japanese yen" },
  { cc: "KES", name: "Kenyan shilling" },
  { cc: "KGS", name: "Kyrgyzstani som" },
  { cc: "KHR", name: "Cambodian riel" },
  { cc: "KMF", name: "Comorian franc" },
  { cc: "KPW", name: "North Korean won" },
  { cc: "KRW", name: "South Korean won" },
  { cc: "KWD", name: "Kuwaiti dinar" },
  { cc: "KYD", name: "Cayman Islands dollar" },
  { cc: "KZT", name: "Kazakhstani tenge" },
  { cc: "LAK", name: "Lao kip" },
  { cc: "LBP", name: "Lebanese lira" },
  { cc: "LKR", name: "Sri Lankan rupee" },
  { cc: "LRD", name: "Liberian dollar" },
  { cc: "LSL", name: "Lesotho loti" },
  { cc: "LTL", name: "Lithuanian litas" },
  { cc: "LVL", name: "Latvian lats" },
  { cc: "LYD", name: "Libyan dinar" },
  { cc: "MAD", name: "Moroccan dirham" },
  { cc: "MDL", name: "Moldovan leu" },
  { cc: "MGA", name: "Malagasy ariary" },
  { cc: "MKD", name: "Macedonian denar" },
  { cc: "MMK", name: "Myanma kyat" },
  { cc: "MNT", name: "Mongolian tugrik" },
  { cc: "MOP", name: "Macanese pataca" },
  { cc: "MRO", name: "Mauritanian ouguiya" },
  { cc: "MUR", name: "Mauritian rupee" },
  { cc: "MVR", name: "Maldivian rufiyaa" },
  { cc: "MWK", name: "Malawian kwacha" },
  { cc: "MXN", name: "Mexican peso" },
  { cc: "MYR", name: "Malaysian ringgit" },
  { cc: "MZM", name: "Mozambican metical" },
  { cc: "NAD", name: "Namibian dollar" },
  { cc: "NGN", name: "Nigerian naira" },
  { cc: "NIO", name: "Nicaraguan c\u00f3rdoba" },
  { cc: "NOK", name: "Norwegian krone" },
  { cc: "NPR", name: "Nepalese rupee" },
  { cc: "NZD", name: "New Zealand dollar" },
  { cc: "OMR", name: "Omani rial" },
  { cc: "PAB", name: "Panamanian balboa" },
  { cc: "PEN", name: "Peruvian nuevo sol" },
  { cc: "PGK", name: "Papua New Guinean kina" },
  { cc: "PHP", name: "Philippine peso" },
  { cc: "PKR", name: "Pakistani rupee" },
  { cc: "PLN", name: "Polish zloty" },
  { cc: "PYG", name: "Paraguayan guarani" },
  { cc: "QAR", name: "Qatari riyal" },
  { cc: "RON", name: "Romanian leu" },
  { cc: "RSD", name: "Serbian dinar" },
  { cc: "RUB", name: "Russian ruble" },
  { cc: "SAR", name: "Saudi riyal" },
  { cc: "SBD", name: "Solomon Islands dollar" },
  { cc: "SCR", name: "Seychellois rupee" },
  { cc: "SDG", name: "Sudanese pound" },
  { cc: "SEK", name: "Swedish krona" },
  { cc: "SGD", name: "Singapore dollar" },
  { cc: "SHP", name: "Saint Helena pound" },
  { cc: "SLL", name: "Sierra Leonean leone" },
  { cc: "SOS", name: "Somali shilling" },
  { cc: "SRD", name: "Surinamese dollar" },
  { cc: "SYP", name: "Syrian pound" },
  { cc: "SZL", name: "Swazi lilangeni" },
  { cc: "THB", name: "Thai baht" },
  { cc: "TJS", name: "Tajikistani somoni" },
  { cc: "TMT", name: "Turkmen manat" },
  { cc: "TND", name: "Tunisian dinar" },
  { cc: "TRY", name: "Turkish new lira" },
  { cc: "TTD", name: "Trinidad and Tobago dollar" },
  { cc: "TWD", name: "New Taiwan dollar" },
  { cc: "TZS", name: "Ukrainian hryvnia" },
  { cc: "UGX", name: "Ugandan shilling" },
  { cc: "USD", name: "United States dollar" },
  { cc: "UYU", name: "Uruguayan peso" },
  { cc: "UZS", name: "Uzbekistani som" },
  { cc: "VEB", name: "Venezuelan bolivar" },
  { cc: "VND", name: "Vietnamese dong" },
  { cc: "VUV", name: "Vanuatu vatu" },
  { cc: "WST", name: "Samoan tala" },
  { cc: "XAF", name: "Central African CFA franc" },
  { cc: "XCD", name: "East Caribbean dollar" },
  { cc: "XDR", name: "Special Drawing Rights" },
  { cc: "XOF", name: "West African CFA franc" },
  { cc: "XPF", name: "CFP franc" },
  { cc: "YER", name: "Yemeni rial" },
  { cc: "ZAR", name: "South African rand" },
  { cc: "ZMK", name: "Zambian kwacha" },
  { cc: "ZWR", name: "Zimbabwean dollar" },
]

export default App
