"use client"

import React, { useState } from "react"
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox"

export default function ComboboxPage() {
  const states = [
    { id: 1, name: "Andhra Pradesh" },
    { id: 2, name: "Arunachal Pradesh" },
    { id: 3, name: "Assam" },
    { id: 4, name: "Bihar" },
    { id: 5, name: "Chhattisgarh" },
    { id: 6, name: "Goa" },
    { id: 7, name: "Gujarat" },
    { id: 8, name: "Haryana" },
    { id: 9, name: "Himachal Pradesh" },
    { id: 10, name: "Jharkhand" },
    { id: 11, name: "Karnataka" },
    { id: 12, name: "Kerala" },
    { id: 13, name: "Madhya Pradesh" },
    { id: 14, name: "Maharashtra" },
    { id: 15, name: "Manipur" },
    { id: 16, name: "Meghalaya" },
    { id: 17, name: "Mizoram" },
    { id: 18, name: "Nagaland" },
    { id: 19, name: "Odisha" },
    { id: 20, name: "Punjab" },
    { id: 21, name: "Rajasthan" },
    { id: 22, name: "Sikkim" },
    { id: 23, name: "Tamil Nadu" },
    { id: 24, name: "Telangana" },
    { id: 25, name: "Tripura" },
    { id: 26, name: "Uttar Pradesh" },
    { id: 27, name: "Uttarakhand" },
    { id: 28, name: "West Bengal" },
    { id: 29, name: "Andaman and Nicobar Islands" },
    { id: 30, name: "Chandigarh" },
    { id: 31, name: "Dadra and Nagar Haveli and Daman and Diu" },
    { id: 32, name: "Delhi" },
    { id: 33, name: "Jammu and Kashmir" },
    { id: 34, name: "Ladakh" },
    { id: 35, name: "Lakshadweep" },
    { id: 36, name: "Puducherry" },
  ]

  const districts = [
    // Andhra Pradesh
    { code: "VZG", label: "Visakhapatnam", stateId: 1 },
    { code: "BZA", label: "Vijayawada", stateId: 1 },
    { code: "TPT", label: "Tirupati", stateId: 1 },

    // Arunachal Pradesh
    { code: "ITA", label: "Itanagar", stateId: 2 },
    { code: "PAS", label: "Pasighat", stateId: 2 },

    // Assam
    { code: "GHY", label: "Guwahati", stateId: 3 },
    { code: "SLC", label: "Silchar", stateId: 3 },

    // Bihar
    { code: "PAT", label: "Patna", stateId: 4 },
    { code: "GYA", label: "Gaya", stateId: 4 },

    // Chhattisgarh
    { code: "RPR", label: "Raipur", stateId: 5 },
    { code: "BSP", label: "Bilaspur", stateId: 5 },

    // Goa
    { code: "PAN", label: "Panaji", stateId: 6 },
    { code: "MDG", label: "Margao", stateId: 6 },

    // Gujarat
    { code: "AMD", label: "Ahmedabad", stateId: 7 },
    { code: "SUR", label: "Surat", stateId: 7 },

    // Haryana
    { code: "GGN", label: "Gurgaon", stateId: 8 },
    { code: "FBD", label: "Faridabad", stateId: 8 },

    // Himachal Pradesh
    { code: "SML", label: "Shimla", stateId: 9 },
    { code: "MAN", label: "Mandi", stateId: 9 },

    // Jharkhand
    { code: "RNC", label: "Ranchi", stateId: 10 },
    { code: "DNB", label: "Dhanbad", stateId: 10 },

    // Karnataka
    { code: "BLR", label: "Bangalore Urban", stateId: 11 },
    { code: "MYS", label: "Mysore", stateId: 11 },
    { code: "UBL", label: "Hubli", stateId: 11 },

    // Kerala
    { code: "TVM", label: "Thiruvananthapuram", stateId: 12 },
    { code: "KOC", label: "Kochi", stateId: 12 },
    { code: "CLT", label: "Kozhikode", stateId: 12 },

    // Madhya Pradesh
    { code: "BPL", label: "Bhopal", stateId: 13 },
    { code: "IDR", label: "Indore", stateId: 13 },

    // Maharashtra
    { code: "MUM", label: "Mumbai", stateId: 14 },
    { code: "PUN", label: "Pune", stateId: 14 },
    { code: "NGP", label: "Nagpur", stateId: 14 },

    // Manipur
    { code: "IMP", label: "Imphal", stateId: 15 },
    { code: "CCP", label: "Churachandpur", stateId: 15 },

    // Meghalaya
    { code: "SHL", label: "Shillong", stateId: 16 },
    { code: "TUR", label: "Tura", stateId: 16 },

    // Mizoram
    { code: "AZL", label: "Aizawl", stateId: 17 },
    { code: "LNG", label: "Lunglei", stateId: 17 },

    // Nagaland
    { code: "KOH", label: "Kohima", stateId: 18 },
    { code: "DMP", label: "Dimapur", stateId: 18 },

    // Odisha
    { code: "BBS", label: "Bhubaneswar", stateId: 19 },
    { code: "CTC", label: "Cuttack", stateId: 19 },

    // Punjab
    { code: "LDH", label: "Ludhiana", stateId: 20 },
    { code: "ASR", label: "Amritsar", stateId: 20 },

    // Rajasthan
    { code: "JPR", label: "Jaipur", stateId: 21 },
    { code: "JDH", label: "Jodhpur", stateId: 21 },

    // Sikkim
    { code: "GTK", label: "Gangtok", stateId: 22 },
    { code: "NAM", label: "Namchi", stateId: 22 },

    // Tamil Nadu
    { code: "CHE", label: "Chennai", stateId: 23 },
    { code: "CBE", label: "Coimbatore", stateId: 23 },
    { code: "MDU", label: "Madurai", stateId: 23 },

    // Telangana
    { code: "HYD", label: "Hyderabad", stateId: 24 },
    { code: "WRG", label: "Warangal", stateId: 24 },

    // Tripura
    { code: "AGT", label: "Agartala", stateId: 25 },
    { code: "DHM", label: "Dharmanagar", stateId: 25 },

    // Uttar Pradesh
    { code: "LKO", label: "Lucknow", stateId: 26 },
    { code: "CNB", label: "Kanpur", stateId: 26 },
    { code: "AGR", label: "Agra", stateId: 26 },

    // Uttarakhand
    { code: "DDN", label: "Dehradun", stateId: 27 },
    { code: "HRD", label: "Haridwar", stateId: 27 },

    // West Bengal
    { code: "KOL", label: "Kolkata", stateId: 28 },
    { code: "SLG", label: "Siliguri", stateId: 28 },

    // Andaman and Nicobar Islands
    { code: "PTB", label: "Port Blair", stateId: 29 },

    // Chandigarh
    { code: "CDG", label: "Chandigarh", stateId: 30 },

    // Dadra and Nagar Haveli and Daman and Diu
    { code: "DAM", label: "Daman", stateId: 31 },
    { code: "SLV", label: "Silvassa", stateId: 31 },

    // Delhi
    { code: "NDL", label: "New Delhi", stateId: 32 },
    { code: "DWR", label: "Dwarka", stateId: 32 },

    // Jammu and Kashmir
    { code: "SXR", label: "Srinagar", stateId: 33 },
    { code: "JMU", label: "Jammu", stateId: 33 },

    // Ladakh
    { code: "LEH", label: "Leh", stateId: 34 },
    { code: "KRG", label: "Kargil", stateId: 34 },

    // Lakshadweep
    { code: "KVT", label: "Kavaratti", stateId: 35 },

    // Puducherry
    { code: "PDY", label: "Puducherry", stateId: 36 },
    { code: "KAR", label: "Karaikal", stateId: 36 },
  ]

  const [stateId, setStateId] = useState("")
  const [districtCode, setDistrictCode] = useState("")
  const [stateSearch, setStateSearch] = useState("")
  const [districtSearch, setDistrictSearch] = useState("")

  const handleStateChange = (val: string) => {
    setStateId(val)
    setDistrictCode("") // reset district when state changes
  }

  // Filter lists manually to strictly preserve the exact order
  const filteredStates = states.filter((s) =>
    s.name.toLowerCase().includes(stateSearch.toLowerCase())
  )

  const filteredDistricts = districts.filter(
    (d) => 
      d.stateId.toString() === stateId &&
      d.label.toLowerCase().includes(districtSearch.toLowerCase())
  )

  const selectedStateName = states.find((s) => s.id.toString() === stateId)?.name
  const selectedDistrictName = districts.find((d) => d.code === districtCode)?.label

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Indian States & Districts Selector</h1>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex flex-col gap-2 flex-1">
          <label className="text-sm font-medium">State</label>
          <Combobox
            value={stateId}
            onValueChange={(val) => handleStateChange(val as string)}
            inputValue={stateSearch}
            onInputValueChange={setStateSearch}
          >
            <ComboboxInput placeholder="Select state..." showTrigger={true} />
            <ComboboxContent>
              <ComboboxEmpty>No state found.</ComboboxEmpty>
              <ComboboxList>
                {filteredStates.map((state) => (
                  <ComboboxItem key={state.id} value={state.id.toString()}>
                    {state.name}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <label className="text-sm font-medium">District</label>
          <Combobox
            value={districtCode}
            onValueChange={(val) => setDistrictCode(val as string)}
            inputValue={districtSearch}
            onInputValueChange={setDistrictSearch}
            disabled={!stateId}
          >
            <ComboboxInput 
              placeholder={stateId ? "Select district..." : "Select state first"} 
              showTrigger={true} 
              disabled={!stateId}
            />
            <ComboboxContent>
              <ComboboxEmpty>No district found.</ComboboxEmpty>
              <ComboboxList>
                {filteredDistricts.map((district) => (
                  <ComboboxItem key={district.code} value={district.code}>
                    {district.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-muted text-sm">
        <h3 className="font-semibold mb-2">Selection:</h3>
        <ul className="space-y-1">
          <li>
            <span className="text-muted-foreground">State:</span>{" "}
            {selectedStateName ? `${selectedStateName} (${stateId})` : "None"}
          </li>
          <li>
            <span className="text-muted-foreground">District:</span>{" "}
            {selectedDistrictName ? `${selectedDistrictName} (${districtCode})` : "None"}
          </li>
        </ul>
      </div>
    </div>
  )
}
