package com.rnlocalnot

import com.facebook.fbreact.specs.NativeCalculatorSpec
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext



class CalculatorModule(context: ReactApplicationContext): NativeCalculatorSpec(context) {
    override fun getName(): String {
        return NAME
    }

    override fun add(a: Double, b: Double, promise: Promise?) {
        promise!!.resolve(a+b)
    }

    override fun pickImage(promise: Promise?) {

    }

    override fun someDummyMethod(promise: Promise?) {

    }

    override fun addTwo(a: Double, b: Double, promise: Promise?) {
        
    }

    companion object {
        const val NAME = "RTNCalculator"
    }



}